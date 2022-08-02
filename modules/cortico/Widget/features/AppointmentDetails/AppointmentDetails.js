import { DotsVerticalIcon } from "@heroicons/react/solid";
import {
  CurrencyDollarIcon,
  XIcon,
  CheckIcon,
  TableIcon,
  ClipboardCheckIcon,
  LockClosedIcon,
} from "@heroicons/react/outline";
import classNames from "classnames";
import { forwardRef } from "preact/compat";
import { useRef, useState } from "preact/hooks";
import { useQuery } from "react-query";
import { Appointment } from "../../../../core/Appointment";
import { Masterfile } from "../../../../core/Masterfile";
import useComponentOutsideHandler from "../../../../Hooks/useComponentOutsideObserver";
import useLeftPositionObserver from "../../../../Hooks/useLeftPositionObserver";
import Loader from "../../../../Messenger/Loader";
import { AtSymbolIcon, PhoneOutgoingIcon } from "@heroicons/react/solid";
import {
  getCorticoAppointmentUrl,
  getCorticoUrl,
  getDaySheet,
} from "../../../../Utils/Utils";
import SignInButton from "../../base/buttons/SignInButton";
import { useDispatch } from "react-redux";
import corticoIcon from "../../../../../resources/icons/logo-dark-blue.svg";

export default function AppointmentDetails({
  apptTd,
  patientStatus,
  type,
  ...props
}) {
  const [on, setOn] = useState(false);
  const detailsRef = useRef(null);
  //In order for it to exit if clicked outside
  useComponentOutsideHandler(detailsRef, setOn);
  const className = useLeftPositionObserver(on, detailsRef);
  const [masterFile] = useState(() => new Masterfile(apptTd));
  const { isError, isLoading } = useQuery(
    [`detailContactInfo`, masterFile, apptTd],
    async () => {
      return await masterFile.fetchPage();
    },
    {
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  );

  return (
    <>
      <ReferenceElement
        patientStatus={patientStatus}
        type={type}
        onClick={() => setOn((on) => !on)}
      ></ReferenceElement>
      {on && (
        <Details
          ref={detailsRef}
          className={className}
          masterFile={masterFile}
          isError={isError}
          isLoading={isLoading}
          apptTd={apptTd}
          setOn={setOn}
        ></Details>
      )}
    </>
  );
}

function ReferenceElement({ patientStatus, type, className, ...props }) {
  return (
    <div className="tw-flex tw-space-x-2">
      <div
        {...props}
        className={classNames(
          "tw-rounded-full tw-p-[1px] tw-shadow-xl tw-flex tw-justify-center tw-items-center tw-border tw-border-white tw-border-solid tw-absolute -tw-top-[13px] tw-z-10001 tw-cursor-pointer",
          type === "private"
            ? "tw-bg-gray-800"
            : patientStatus === true
            ? "tw-bg-green-600"
            : patientStatus === "unverified"
            ? "tw-bg-blue-1000"
            : patientStatus === "uninsured"
            ? "tw-bg-pink-500"
            : "tw-bg-blue-1000"
        )}
      >
        {type === "private" ? (
          <CurrencyDollarIcon className="tw-w-3 tw-h-3 tw-text-white" />
        ) : patientStatus === true ? (
          <CheckIcon className="tw-w-3 tw-h-3 tw-text-white" />
        ) : patientStatus === "uninsured" ? (
          <XIcon className="tw-w-3 tw-h-3 tw-text-white" />
        ) : (
          <DotsVerticalIcon className="tw-w-3 tw-h-3 tw-text-white" />
        )}
      </div>
    </div>
  );
}

function DetailLinks({ apptTd }) {
  const dispatch = useDispatch();
  const corticoURL = getCorticoUrl();

  const handleClick = () => {
    dispatch({
      type: "app/setOpen",
      payload: true,
    });
    dispatch({
      type: "sidebar/setVisible",
      payload: "Account",
    });
  };

  if (!corticoURL) {
    return (
      <>
        <div className="tw-max-w-[300px]">
          <div className="tw-whitespace-normal">
            This feature requires the user to be signed in.
          </div>
          <SignInButton onClick={handleClick}></SignInButton>
        </div>
      </>
    );
  }

  const appointment = new Appointment(apptTd);
  const providerNo = appointment.getCurrentProvider();
  const appointmentNo = appointment.getAppointmentNo();

  return (
    <ul className="tw-list-none tw-p-0 tw-m-0 tw-font-normal tw-text-gray-600">
      <li className="tw-flex tw-items-center tw-space-x-1">
        <TableIcon className="tw-w-5 tw-h-5"></TableIcon>
        <a href={`${getDaySheet()}`} target="_blank" className="">
          Day Sheet
        </a>
      </li>
      <li className="tw-flex tw-items-center tw-space-x-1">
        <ClipboardCheckIcon className="tw-w-5 tw-h-5"></ClipboardCheckIcon>
        <a
          href={`${getCorticoAppointmentUrl(providerNo, appointmentNo)}`}
          target="_blank"
          className="  "
        >
          Go To Appointment (Cortico)
        </a>
      </li>
    </ul>
  );
}

function DetailContactInfo({ masterFile }) {
  const email = masterFile.getEmail();
  const phoneNumbers = masterFile.getPhoneNumbers();
  const homePhone = phoneNumbers.find((p) => p.type === "home");
  const workPhone = phoneNumbers.find((p) => p.type === "work");
  const cellphone = phoneNumbers.find((p) => p.type === "cell");

  return (
    <>
      <div>
        <p className="tw-text-gray-500 tw-text-sm tw-font-semibold tw-m-0 tw-p-0 tw-mb-2">
          Patient Information
        </p>
      </div>
      <div className="tw-space-y-2">
        {email && (
          <DetailItem
            icon={<AtSymbolIcon></AtSymbolIcon>}
            email={email}
          ></DetailItem>
        )}
        {homePhone?.phone && (
          <DetailItem
            phone={homePhone.phone}
            icon={<PhoneOutgoingIcon></PhoneOutgoingIcon>}
          ></DetailItem>
        )}
        {workPhone?.phone && (
          <DetailItem
            icon={<PhoneOutgoingIcon></PhoneOutgoingIcon>}
            phone={workPhone.phone}
          ></DetailItem>
        )}
        {cellphone?.phone && (
          <DetailItem
            icon={<PhoneOutgoingIcon></PhoneOutgoingIcon>}
            phone={cellphone.phone}
          ></DetailItem>
        )}
      </div>
    </>
  );
}

const DetailItem = ({ phone, email, icon, anchor, ...props }) => {
  return (
    <div className="tw-text-gray-500 tw-text-xs tw-font-regular">
      <div className="tw-flex tw-space-x-1 tw-bg-gray-100 tw-rounded-md tw-px-2 tw-py-1 tw-items-center">
        <div className="tw-w-3 tw-h-3">{icon}</div>
        {phone ? (
          <a href={`tel:${phone}`} className="">
            {phone}
          </a>
        ) : email ? (
          <a href={`mailto:${email}`} className="">
            {email}
          </a>
        ) : null}
      </div>
    </div>
  );
};

const Details = forwardRef(
  ({ apptTd, className, masterFile, isError, isLoading, setOn }, ref) => {
    return (
      <div
        ref={ref}
        className={classNames(
          className,
          `tw-absolute text-white tw-rounded-lg tw-bg-white -tw-top-3
           tw-border tw-border-black tw-border-opacity-10 tw-border-solid tw-z-10002 text-sm tw-shadow-xl`
        )}
      >
        <div className="tw-p-4 tw-flex tw-justify-center tw-items-center">
          <img src={corticoIcon} className="tw-w-12 tw-h-12" />
        </div>
        <div className="tw-px-6 tw-pb-6 tw-pt-4">
          <p className="tw-text-gray-500 tw-text-sm tw-font-semibold tw-m-0 tw-p-0">
            Quick Links
          </p>
          <p className="tw-text-xs tw-text-gray-500 tw-m-0 tw-p-0 tw-mb-2">
            Deep links to Cortico regarding the appointment
          </p>
          <DetailLinks apptTd={apptTd} />
        </div>

        {isError && <div>Failed to Fetch.</div>}
        {isLoading && (
          <div className="tw-text-center">
            <Loader />
          </div>
        )}
        {!isError && !isLoading && (
          <div className="tw-px-6 tw-pb-6 tw-pt-4 tw-bg-slate-200 tw-rounded-b-md">
            <DetailContactInfo masterFile={masterFile} />
          </div>
        )}
      </div>
    );
  }
);
