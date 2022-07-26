import { DotsVerticalIcon } from "@heroicons/react/solid";
import { forwardRef } from "preact/compat";
import { useRef, useState } from "preact/hooks";
import { useQuery } from "react-query";
import { Appointment } from "../../../../core/Appointment";
import { Masterfile } from "../../../../core/Masterfile";
import useComponentOutsideHandler from "../../../../Hooks/useComponentOutsideHandler";
import { CorticoPreactIcon } from "../../../../Icons/CorticoIcon";
import Loader from "../../../../Messenger/Loader";
import { getCorticoAppointmentUrl, getCorticoUrl, getDaySheet } from "../../../../Utils/Utils";

export default function AppointmentDetails({ apptTd }) {
  const [on, setOn] = useState(false);
  const detailsRef = useRef(null);
  //In order for it to exit if clicked outside
  useComponentOutsideHandler(detailsRef, setOn)

  const [masterFile, setMasterfile] = useState(new Masterfile(apptTd));

  const {isError, isLoading} = useQuery(
    [`detailContactInfo`, masterFile, apptTd],
    async () => {
      return await masterFile.fetchPage();
    },
    {
      staleTime: Infinity,
      cacheTime: Infinity,
      retry: false,
    }
  );

  return (
    <>
      <ReferenceElement onClick={() => setOn((on) => !on)}></ReferenceElement>
      {on && <Details ref={detailsRef} masterFile={masterFile} isError={isError} isLoading={isLoading} apptTd={apptTd} setOn={setOn}></Details>}
    </>
  );
}

function ReferenceElement({ className, ...props }) {
  return (
    <div
      {...props}
      className="tw-bg-blue-1000 tw-rounded-full tw-p-[1px] tw-shadow-xl tw-flex tw-justify-center tw-items-center
        tw-border tw-border-white tw-border-solid tw-absolute -tw-top-[12px] tw-z-10001 tw-cursor-pointer"
    >
      <DotsVerticalIcon className="tw-w-3 tw-h-3 tw-text-white" />
    </div>
  );
}

function DetailHeader() {
  return (
    <div className="tw-bg-white tw-rounded-lg tw-py-[5px] tw-px-[10px] tw-flex tw-items-center tw-gap-1 tw-mb-[5px]">
      <CorticoPreactIcon height="15"/>
      <h5 className='tw-p-0 tw-m-0 tw-text-sm tw-text-[#5b6ce2]'>Cortico</h5>
    </div>
  );
}

function DetailLinks({ apptTd }) {
  const corticoURL = getCorticoUrl();

  if(!corticoURL) {
    return (
      <div style="white-space: initial;">
        Cortico clinic has not been set. Please set the Cortico Clinic URL from the sidebar.
      </div>
    )
  }

  const appointment = new Appointment(apptTd);
  const providerNo = appointment.getCurrentProvider();
  const appointmentNo = appointment.getAppointmentNo();

  return (
    <ul className="tw-list-none tw-pl-0">
      <li className="tw-mb-2">
        <a href={`${getDaySheet()}`} target="_blank" className="tw-text-white hover:tw-text-[#d8ddff] tw-underline">
          ☛ Day Sheet
        </a>
      </li>
      <li>
        <a href={`${getCorticoAppointmentUrl(
          providerNo,
          appointmentNo
        )}`} target="_blank" className="tw-text-white hover:tw-text-[#d8ddff] tw-underline">
          ☛ Go To Appointment (Cortico)
        </a>
      </li>
    </ul>
  )
}

function DetailContactInfo({ masterFile }) {
  const email = masterFile.getEmail();
  const phoneNumbers = masterFile.getPhoneNumbers();
  const homePhone = phoneNumbers.find((p) => p.type === "home");
  const workPhone = phoneNumbers.find((p) => p.type === "work");
  const cellphone = phoneNumbers.find((p) => p.type === "cell");

  return (
    <>
      {email && 
        <div>
          <span class="tw-text-white">☛ </span>
          <a href={`mailto:${email}`} className="tw-text-white hover:tw-text-[#d8ddff] tw-underline">
            {email}
          </a>
        </div>}
      {homePhone?.phone && 
        <div>
          <span class="tw-text-white">☛ </span>
          <a href={`tel:${homePhone.phone}`} className="tw-text-white hover:tw-text-[#d8ddff] tw-underline">
            {homePhone.phone}
          </a>
        </div>}
      {workPhone?.phone && 
        <div>
          <span class="tw-text-white">☛ </span>
          <a href={`tel:${workPhone.phone}`} className="tw-text-white hover:tw-text-[#d8ddff] tw-underline">
            {workPhone.phone}
          </a>
        </div>}
      {cellphone?.phone && 
        <div>
          <span class="tw-text-white">☛ </span>
          <a href={`tel:${cellphone.phone}`} className="tw-text-white hover:tw-text-[#d8ddff] tw-underline">
            {cellphone.phone}
          </a>
        </div>}
    </>
  );
}

const Details = forwardRef(({ apptTd, masterFile, isError, isLoading, setOn }, ref) => {
  return (
      <div ref={ref} className="tw-absolute text-white tw-top-0 tw-right-0 tw-p-6 tw-rounded-lg tw-bg-[#5b6ce2] tw-border tw-border-[#d8ddff] tw-border-solid z-[1500] text-sm tw-shadow-sm">
        <div className="tw-absolute tw-top-0 tw-right-0 tw-text-xs tw-px-[5px] tw-py-0 hover:tw-cursor-pointer mr-1 mt-1" onClick={() => setOn(() => false)}>
          <span className="tw-text-white">X</span>
        </div>

        <DetailHeader />

        <h5 class='color-[#5b6ce2] appointment-menu-subheading'>Cortico Links</h5>
        <DetailLinks apptTd={apptTd} />

        <hr className="tw-m-py-[10px] tw-m-px-0 tw-border-white tw-border-opacity-30 tw-my-0"></hr>

        <h5 className="tw-text-xs tw-text-[#d8ddff]">Contact Information</h5>
        {isError && <div>Failed to Fetch.</div>}
        {isLoading && <div className="text-center"><Loader /></div>}
        {(!isError && !isLoading) && <DetailContactInfo masterFile={masterFile}/>}
      </div>
  );
})
