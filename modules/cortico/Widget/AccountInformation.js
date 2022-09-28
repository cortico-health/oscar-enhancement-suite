import { useEffect, useState } from "preact/hooks";
import { LockOpenIcon,PencilAltIcon } from "@heroicons/react/solid";
import {
  removeExtensionStorageValue,
  loadExtensionStorageValue,
} from "../../Utils/Utils";
import storage from "./storage/";
import { useDispatch,useSelector } from "react-redux";
import Button from "../../core/Button";
import { SecondaryButton } from "../../core/Button";
import Header from "./base/Header";
import { BroadcastChannel } from "broadcast-channel";

import Facebook from "../../../resources/icons/facebook.svg";
import Twitter from "../../../resources/icons/twitter.svg";
import Linkedin from "../../../resources/icons/linkedin.svg";
import Instagram from "../../../resources/icons/instagram.svg";
import { nanoid } from "nanoid";

const STATUS = ["Available","Away","On Vacation"];
const PRONOUNS = ["She/Her","He/His"];
const NOTIFY = ["Every message","Once a day","Never"];

function InputEdit({ type = "text",...props }) {
  return (
    type === "text" ?
      <input
        className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-p-2"
        { ...props }
      />
      :
      <textarea
        className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg tw-resize-none focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-p-2"
        { ...props }
      >
      </textarea>
  )
}

function RadioEdit({ list,checked,name,onChange }) {
  return (
    <div className="tw-flex tw-flex-col tw-gap-y-2">
      {
        list?.map(li => {
          const uniqId = nanoid();

          return (
            <div className="tw-flex tw-items-center tw-mb-2">
              <input type="radio" value={ li } checked={ checked === li } id={ uniqId } name={ name } className="tw-w-4 tw-h-4 tw-text-blue-600 tw-bg-gray-100 tw-border-gray-300" />
              <label for={ uniqId } className="tw-ml-2 tw-text-sm tw-font-medium tw-text-gray-900 tw-cursor-pointer">{ li }</label>
            </div>
          )
        })
      }
    </div>
  )
}

function InputWithIcon({ icon,name,placeholder,onChange,defaultValue,...props }) {
  return (
    <div className="tw-flex tw-gap-x-4 tw-items-center tw-pb-2">
      <img className={ `tw-w-${props}` } src={ icon } />
      <InputEdit
        type="text"
        defaultValue={ defaultValue }
        placeholder={ placeholder }
        name={ name }
        onChange={ onChange }
      />
    </div>
  );
}


function AccountInformationDescription({ label,text,onChange,isEdit }) {
  return (
    <div className="tw-flex tw-flex-col tw-py-4 tw-border-b tw-border-black tw-border-opacity-10">
      <p className="tw-text-gray-700 tw-mb-2">{ label }</p>
      { !isEdit ?
        <p className="tw-leading-6">{ text }</p>
        :
        <InputEdit
          type="textarea"
          defaultValue={ text }
          rows={ 5 }
        />
      }
    </div>
  );
}

function AccountInformationList({ label,list,onChange,isEdit }) {
  return (
    <div className="tw-flex tw-flex-col tw-py-4 tw-border-b tw-border-black tw-border-opacity-10">
      <p className="tw-text-gray-700">{ label }</p>
      { !isEdit ?
        <div className="tw-flex tw-flex-wrap tw-gap-3 tw-mt-3">
          { list?.map(value => (
            <span class="tw-bg-blue-100 tw-text-blue-800 tw-text-sm tw-font-medium tw-px-2.5 tw-py-0.5 tw-rounded">{ value }</span>
          )) }
        </div>
        :
        <InputEdit
          type="text"
          defaultValue={ list?.join(",") }
        />
      }
    </div>

  )
}

function AccountInformationSocials({ label,links,onChange,isEdit }) {
  return (
    <div className="tw-flex tw-justify-between tw-items-center tw-py-4 tw-border-b tw-border-black tw-border-opacity-10">
      <p className="tw-text-gray-700">{ label }</p>
      { !isEdit ?
        <div className="tw-flex tw-gap-4 tw-items-center">
          <img src={ Facebook } className="tw-cursor-pointer tw-w-5 tw-h-5" onClick={ () => window.open(links.facebook) } />
          <img src={ Twitter } className="tw-cursor-pointer tw-w-5 tw-h-5" onClick={ () => window.open(links.twitter) } />
          <img src={ Instagram } className="tw-cursor-pointer tw-w-5 tw-h-5" onClick={ () => window.open(links.instagram) } />
          <img src={ Linkedin } className="tw-cursor-pointer tw-w-5 tw-h-5" onClick={ () => window.open(links.linkedin) } />
        </div>
        :
        <div className="tw-flex tw-flex-col">
          <InputWithIcon icon={ Facebook } name="facebook_url" defaultValue={ links.facebook } />
          <InputWithIcon icon={ Twitter } name="twitter_url" defaultValue={ links.twitter } />
          <InputWithIcon icon={ Instagram } name="instagram_url" defaultValue={ links.instagram } />
          <InputWithIcon icon={ Linkedin } name="linkedin_url" defaultValue={ links.linkedin } />
        </div>
      }
    </div>
  )
}

function AccountInformationItemList({ label,chosen,list,isEdit }) {
  return (
    <div className="tw-flex tw-justify-between tw-items-center tw-py-4 tw-border-b tw-border-black tw-border-opacity-10">
      <p className="tw-text-gray-700">{ label }</p>
      { !isEdit ?
        <p>{ chosen }</p>
        :
        <RadioEdit list={ list } name={ label.split(" ").join("_") } checked={ chosen } />
      }
    </div>
  )
}

function AccountInformationItem({ label,content,isEdit }) {
  return (
    <div className="tw-flex tw-justify-between tw-items-center tw-py-4 tw-border-b tw-border-black tw-border-opacity-10">
      <p className="tw-text-gray-700">{ label }</p>
      { !isEdit ?
        <p>{ content }</p>
        :
        <InputEdit type="text" defaultValue={ content } />
      }
    </div>
  )
}

export default function AccountInformation() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [isEditMode,setIsEditMode] = useState(false);
  const { clinic_name: clinicName, uid } = useSelector((state) => state.app);
  const [username, setUsername] = useState(null);

  const handleSignOut = async () => {
    setLoading(true);
    const remove = [
      "jwt_username",
      "jwt_expired",
      "jwt_access_token",
      "name",
      "clinicname",
      "customUrlSuffix",
    ];

    for (let i = 0; i < remove.length; i++) {
      await removeExtensionStorageValue(remove[i]);
    }

    const authChannel = new BroadcastChannel("cortico/oes/auth");
    authChannel.postMessage({
      title: "Sign Out Detected",
      description: "Refresh is required to have the plugin working smoothly",
      uid,
    });
    authChannel.close();

    storage.removeItem("oes").then(() => {
      setTimeout(() => window.location.reload());
    });
  };

  const toggleEdit = () => {
    setIsEditMode((prevEditMode) => !prevEditMode);
  }

  const handleSave = () => {
    console.log("SAVED");
  }

  useEffect(() => {
    if (!username) {
      loadExtensionStorageValue("jwt_username").then((username) => {
        setUsername(username);
      });
    }
  }, []);

  return (
    <>
      <div className="tw-p-4 tw-w-[450px]">
        <div className="tw-font-sans">
          <Header title="Account" desc="Account related information" />
          <hr className="tw-my-4" />

          <div className="tw-w-full tw-flex tw-justify-between tw-my-4 tw-font-sans">
            <SecondaryButton
              onClick={ toggleEdit }
            >
              <PencilAltIcon className="tw-inline-block tw-mr-2 tw-text-blue-1000 tw-h-4 tw-w-4 tw-opacity-50"></PencilAltIcon>
              { !isEditMode ? "Edit Profile" : "Cancel Edit" }
            </SecondaryButton>

            <Button
              variant="custom"
              onClick={ handleSignOut }
              size="sm"
              loading={ loading }
              className="tw-bg-blue-100 tw-text-blue-700 tw-text-sm tw-rounded-md tw-font-medium"
            >
              <LockOpenIcon className="tw-inline-block tw-mr-2 tw-text-blue-1000 tw-h-4 tw-w-4 tw-opacity-50"></LockOpenIcon>
              Sign Out
            </Button>
          </div>

          <div className="tw-flex tw-w-full tw-items-start">
            <span className="tw-text-xl tw-flex-shrink-0 tw-h-24 tw-w-24 tw-mx-auto  tw-rounded-full tw-overflow-hidden tw-bg-gray-100 tw-flex tw-items-center tw-justify-center tw-text-gray-900 tw-font-medium">
              {clinicName
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
        </div>

        <div className="tw-font-sans tw-text-sm tw-mt-2">
          <AccountInformationItem label="Clinic Name" content={ clinicName } />

          <AccountInformationItem label="Clinic Url" content={
              <a
              href={ `https://${localStorage.getItem(
                  "clinicname"
              )}.${localStorage.getItem("customUrlSuffix")}` }
                target="_blank"
                className="tw-underline"
              >
              https://{ localStorage.getItem("clinicname") }.{ localStorage.getItem("customUrlSuffix") }
              </a>
          } />

          <AccountInformationItem label="Username" content={ username } />
        </div>

        <div className="tw-font-sans tw-text-sm tw-mt-2 tw-pb-2">
          <h2 className="tw-text-lg tw-font-bold tw-font-sans">Personal Information</h2>

          <AccountInformationItemList label="Status" chosen="Available" list={ STATUS } isEdit={ isEditMode } />

          <AccountInformationItemList label="Pronouns" chosen="He/His" list={ PRONOUNS } isEdit={ isEditMode } />

          <AccountInformationItem label="Location" content="Vancouver" isEdit={ isEditMode } />

          <AccountInformationList
            label="Languages"
            list={ [
              "English",
              "Chinese",
              "Vietnamese"
            ] }
            isEdit={ isEditMode }
          />

          <AccountInformationList
            label="Special Interest"
            list={ [
              "Playing Golf",
              "Playing Games",
              "Studying"
            ] }
            isEdit={ isEditMode }
          />

          <AccountInformationDescription
            label="Biography"
            text="Ellen Host is a content marketing professional at HubSpot, a CRM platform that helps companies attract visitors, convert leads, and close customers. Previously, Rodney worked as a marketing manager for a tech software startup. He graduated with honors from Columbia University with a dual degree in Business Administration and Creative Writing."
            isEdit={ isEditMode }
          />
        </div>

        <div className="tw-font-sans tw-text-sm tw-mt-2 tw-pb-2">
          <h2 className="tw-text-lg tw-font-bold tw-font-sans">Contact Information</h2>

          <AccountInformationItem label="Email" content="ellen@gmail.com" isEdit={ isEditMode } />

          <AccountInformationItem label="Phone" content="+1 819 555 5555" isEdit={ isEditMode } />

          <AccountInformationSocials label="Socials (optional)" links={ {
            facebook: "https://facebook.com",
            twitter: "https://twitter.com",
            linkedin: "https://linkedin.com",
            instagram: "https://instagram.com"
          } }
            isEdit={ isEditMode }
          />

          <AccountInformationItemList label="Notify via sms" chosen="Every message" list={ NOTIFY } isEdit={ isEditMode } />
          <AccountInformationItemList label="Notify via email" chosen="Once a day" list={ NOTIFY } isEdit={ isEditMode } />
        </div>

        <div className="tw-font-sans tw-flex tw-gap-x-2 tw-justify-center tw-mt-2">
          { isEditMode && <Button
            variant="custom"
            onClick={ toggleEdit }
            size="sm"
            loading={ loading }
            className="tw-bg-red-500 tw-text-white tw-text-sm tw-rounded-md tw-font-medium"
          >
            Cancel
          </Button> }
          { isEditMode && <Button
            variant="custom"
            onClick={ handleSave }
            size="sm"
            loading={ loading }
            className="tw-bg-blue-500 tw-text-white tw-text-sm tw-rounded-md tw-font-medium"
          >
            Save
          </Button> }
        </div>

        <div className="tw-flex tw-justify-between tw-mt-10 tw-font-sans">
          <p className="tw-text-sm tw-text-center tw-font-semibold">
            &copy; <span className="tw-text-blue-1000">Cortico</span>
          </p>
          <a
            href="mailto:help@cortico.health"
            className="tw-text-blue-1000 tw-text-sm tw-font-normal"
          >
            help@cortico.health
          </a>
        </div>
      </div>
    </>
  );
}
