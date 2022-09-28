import BarsArrowUp from "../../../../../resources/icons/bars-arrow-up.svg";
import classNames from "classnames";
import DOMPurify from "dompurify";
import { nanoid } from "nanoid";
import { createPortal } from "preact/compat";
import { useState } from "preact/hooks";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addEncounterNote,getEncounterNotes,postCaseManagementEntry } from "../../../../Api/Api";
import Encounter from "../../../../core/Encounter";
import { formProviderEncounterMessage,getDemographicNo } from "../../../../Utils/Utils";
import { useStore } from "../../store/mobx";
import MConfirmationModal from "./MConfirmationModal";

const formatURL = (string) => {
    return string.replace(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,(url) => '<a class="text-primary-500" href="' + url + '">' + url + '</a>')
}

const MMessageText = ({ isUser,body,sender,isUploadEnabled }) => {
    const dispatch = useDispatch();
    const { clinic_name: clinicName,uid } = useSelector((state) => state.app);

    const { patientStore } = useStore();

    const [isModalOpen,setIsModalOpen] = useState(false);
    const [hideIcon,setHideIcon] = useState(true);
    const [isLoading,setIsLoading] = useState(false);

    const modalContainer = document.getElementById('upload-confirm');

    const message = () => ({
        __html: DOMPurify.sanitize(formatURL(body))
    });

    const closeModal = () => {
        setIsModalOpen(false);
        setIsLoading(false);
    }

    const uploadToChartNotes = async () => {
        setIsLoading(true);
        try {
            const encounterMessage = formProviderEncounterMessage(sender,body);
            const caseNote = Encounter.getCaseNote();

            if (caseNote) {
                const result = Encounter.addToCaseNote(encounterMessage);
                if (result === true) caseNote.focus();
                closeModal();
                return;
            }

            let encounterTabFound = false;
            // Check if e-chart tab is open
            const encounterChannel = new BroadcastChannel("cortico/oes/encounter");
            encounterChannel.addEventListener("message",(data) => {
                if (data.uid !== uid && data.encounter === true) {
                    encounterTabFound = true;
                }
            });

            const demographicNo = getDemographicNo();
            if (!demographicNo) {
                closeModal();
                throw Error("Could not find demographic number");
            }
            encounterChannel.postMessage({
                uid,
                demographicNo,
                sender,
                body
            });

            await new Promise((resolve) => setTimeout(resolve,1000));
            encounterChannel.close();

            if (encounterTabFound === true) {
                console.log("Encounter Tab Found");
                closeModal();
                return
            }

            console.log("Encounter Tab Not Found");

            const res = await Promise.all([
                postCaseManagementEntry(demographicNo),
                getEncounterNotes(demographicNo),
            ]);

            const result = await Promise.all([res[0].text(),res[1].text()]);

            const programId = Encounter.getProgramId(result[0]);
            const note_id = Encounter.getNoteId(result[1]);

            const temp = window.document.createElement("html");
            temp.innerHTML = result[1];
            let note = Encounter.getCaseNote(temp);

            if (note == null) {
                throw Error("Could not find encounter notes");
            }

            if (programId == null) {
                throw Error("Could not find program id");
            }

            if (note_id == null) {
                throw Error("Could not find note id");
            }

            note = note.value;

            await addEncounterNote(
                demographicNo,
                note_id,
                programId,
                note + encounterMessage
            );

            closeModal();

            dispatch({
                type: "notifications/add",
                payload: {
                    type: "success",
                    message: "Message saved to encounter notes",
                    id: nanoid(),
                },
            });

        } catch (error) {
            closeModal();
            dispatch({
                type: "notifications/add",
                payload: {
                    type: "error",
                    message: error.message || error.toString(),
                    title: "Failed To Copy To Encounter",
                    id: nanoid(),
                },
            });
            console.error(error);
        }
    }

    return (
        <>
            <div className={ classNames("tw-max-w-[60%] tw-min-w-[150px]") }
            >
                <div
                    className={ classNames("tw-flex tw-items-center tw-gap-2",isUser && "tw-flex-row-reverse") }
                    onMouseEnter={ () => setHideIcon(false) }
                    onMouseLeave={ () => setHideIcon(true) }
                >
                    <div className={ classNames("tw-rounded-2xl tw-p-4 tw-mb-2 tw-mt-3 tw-max-w-[80%]",
                        isUser ? "tw-bg-blue-200" : "tw-bg-secondary-200") }
                    >
                        <p className="tw-text-secondary-500 tw-text-message1 tw-break-words" dangerouslySetInnerHTML={ message() } />
                    </div>
                    { (isUploadEnabled && !hideIcon) && <div className="tw-p-2 hover:tw-bg-blue-500/60 hover:tw-rounded-full tw-w-10 tw-h-10">
                        <img src={ BarsArrowUp }
                            className="tw-cursor-pointer"
                            onClick={ () => setIsModalOpen(true) }
                        />
                    </div> }
                </div>
            </div>

            { (isModalOpen && isUploadEnabled) && createPortal(
                <MConfirmationModal
                    setIsOpen={ setIsModalOpen }
                    onConfirm={ uploadToChartNotes }
                    type="encounter"
                    isLoading={ isLoading } />
                ,modalContainer)
            }
        </>
    )
}

export default MMessageText

