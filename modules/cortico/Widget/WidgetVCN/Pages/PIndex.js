import {useEffect} from "preact/hooks";
import {useStore} from "../../store/mobx";
import CMessageList from "../Organisms/CMessageList";
import Sidebar from "../Sidebar";
import {observer, Observer} from "mobx-react-lite";
import {Oscar} from "../../../../core/Oscar";

const oscar = new Oscar(window.location.hostname);

const PIndex = () => {
  const {conversationStore} = useStore();

  useEffect(() => {
    return () => {
      conversationStore.conversations.selected = null;
    };
  }, []);

  return (
    <Observer>
      <div
        id="upload-confirm"
        className="tw-relative tw-flex tw-w-full tw-h-full">
        <Sidebar />

        <CMessageList isEncounterPage={oscar.isEncounterPage()} />
      </div>
    </Observer>
  );
};

export default PIndex;
