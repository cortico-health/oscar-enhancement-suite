import { useState } from "preact/hooks";
import ASvg from "../atoms/a-svg";
import AButton from "../atoms/a-button";
import ARadio from "../atoms/a-radio";
import MProfileInput from "../molecules/m-profile-input";
import { updateProfile } from '../../api/users';
import { multipleDataFormatting } from "../../helper/multipleDataFormatting";

const STATUS = ["Available", "Away", "On Vacation"];
const PRONOUNS = ["She/Her", "He/His"];
const NOTIFY = ["Every message", "Once a day", "Never"];

const CEditProfile = ({ profile, opened, setOpenModal }) => {
  const [inputs, setInputs] = useState(profile);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSave = () => {
    updateProfile(inputs).then((response) => {
      console.log(response.data)
      setInputs(response.data);
      setIsLoading(false);
    }).catch((error) => {
      console.log(error);
      setIsLoading(false);
    })
  }

  return (
    <div className={`${opened ? "flex" : "hidden"} c-edit-profile py-4`}>
      <div className="flex max-h-full overflow-y-scroll bg-secondary-20 relative">
        <a href="#" onClick={() => setOpenModal(false)}>
          <ASvg className="absolute cursor-pointer top-3 right-3" src="exit" />
        </a>
        <div className="c-edit-profile__left-section">
          <div className="o-aspect-ratio w-40 mb-7 mx-auto">
            <img
              className="o-aspect-ratio__content rounded-2xl object-cover"
              src={inputs.avatar || "https://images.unsplash.com/photo-1611695434398-4f4b330623e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"}
            />

            <label className="absolute bottom-0 right-0">
              {/* That's not fisnished, but there is a place to load image */}
              <input onChange={(e) => console.log(e.target.files[0])} type="file" accept="image/png, image/gif, image/jpeg" class="hidden" name="avatar" />
              <ASvg
                role="button"
                className="absolute child-hover:fill-primary-700 bottom-0 right-0 w-6 h-6 border-4 border-white rounded-full"
                src="add"
              />
            </label>

          </div>

          <h2 className="c-edit-profile__heading mb-2">Status</h2>
          <div className="flex gap-x-7">
            {STATUS.map((status) => {
              return (
                <ARadio
                  checked={inputs.availability_status === status.toLowerCase()}
                  onChange={handleChange}
                  name="availability_status"
                  className="font-normal"
                  value={status}
                />
              )
            })}
          </div>

          <h2 className="c-edit-profile__heading mb-2">Languages</h2>
          <div className="flex items-center gap-x-2.5 mb-5">
            <p className="c-edit-profile__copy">
              {multipleDataFormatting(inputs.languages)}
            </p>
            <ASvg
              role="button"
              className="child-hover:fill-primary-700 w-6 h-6"
              src="add"
            />
          </div>

          <h2 className="c-edit-profile__heading mb-2">Pronouns</h2>
          <div className="flex gap-x-7">
            {PRONOUNS.map((pronouns) => {
              return (
                <ARadio
                  checked={inputs.pronouns === pronouns}
                  onChange={handleChange}
                  name="pronouns"
                  className="font-normal"
                  value={pronouns}
                />
              )
            })}
          </div>

          <h2 className="c-edit-profile__heading mb-2">Location</h2>
          <p className="c-edit-profile__copy mb-5">{inputs.location}</p>

          <h2 className="c-edit-profile__heading mb-2">Contacts</h2>
          <MProfileInput
            defaultValue={inputs.email}
            placeholder="email"
            icon="email"
            name="email"
            onChange={handleChange}
          />
          <MProfileInput
            defaultValue={inputs.cell_phone}
            placeholder="phone"
            icon="phone"
            name="cell_phone"
            onChange={handleChange}
          />

          <>
            <div className="mt-6 mb-4.5 flex justify-between">
              <h2 className="c-edit-profile__heading"> Socials </h2>
              <p className="text-select1 text-secondary-300">(optional)</p>
            </div>
            <div className="pb-11">
              <MProfileInput
                defaultValue={inputs.twitter_url}
                placeholder="twitter account"
                name="twitter_url"
                icon="twitter"
                onChange={handleChange}
              />
              <MProfileInput
                defaultValue={inputs.instagram_url}
                placeholder="instagram account"
                name="instagram_url"
                icon="instagram"
                onChange={handleChange}
              />
              <MProfileInput
                defaultValue={inputs.linked_in_url}
                placeholder="linkedin account"
                name="linked_in_url"
                icon="linkedin"
                onChange={handleChange}
              />
              <MProfileInput
                defaultValue={inputs.facebook_url}
                placeholder="facebook account"
                name="facebook_url"
                icon="facebook"
                onChange={handleChange}
              />
            </div>
          </>
        </div>

        <div className="c-edit-profile__right-section">
          <h1 className="font-bold text-secondary-500 text-title1 mb-2">
            {inputs.name}
          </h1>
          <p className="text-secondary-300 text-title7">{inputs.clinic_name}</p>
          <p role="button" className="text-primary-500 text-title6 font-medium">Add/change clinic &#10132;</p>

          <textarea
            name="biography"
            onChange={handleChange}
            defaultValue={inputs.biography}
            className="c-edit-profile__textarea"
            rows={9}
          />
          <h2 className="c-edit-profile__heading mb-3">Special Interests</h2>
          <textarea
            name="special_interests"
            onChange={handleChange}
            defaultValue={inputs.special_interests}
            className="c-edit-profile__textarea"
            rows={5}
          />
          <h2 className="c-edit-profile__heading mb-3">Notify via sms</h2>
          <div className="flex gap-x-4.5">
            {NOTIFY.map((notify) => {
              return (
                <ARadio
                  checked={inputs.sms_notification_frequency == notify.toLowerCase()}
                  onChange={handleChange}
                  name="sms_notification_frequency"
                  className="font-normal"
                  value={notify}
                />
              )
            })}
          </div>
          <h2 className="c-edit-profile__heading mt-4 mb-3">Notify via email</h2>
          <div className="flex gap-x-4.5">
            {NOTIFY.map((notify) => {
              return (
                <ARadio
                  checked={inputs.email_notification_frequency == notify.toLowerCase()}
                  onChange={handleChange}
                  name="email_notification_frequency"
                  className="font-normal"
                  value={notify}
                />
              )
            })}
          </div>
          <div className="w-full flex justify-end">
            <AButton className="w-28" isLoading={isLoading} onClick={handleSave}>Save</AButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CEditProfile;
