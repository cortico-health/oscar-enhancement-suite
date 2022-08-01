import { h } from "preact";

import ASvg from "../atoms/a-svg";
import AButton from "../atoms/a-button";
import ARadio from "../atoms/a-radio";

import { usersData } from "../../data";
import { useState } from "preact/hooks";
import MProfileInput from "../molecules/m-profile-input";
import { multipleDataFormatting } from "../../helper/multipleDataFormatting";

const STATUS = ["Available", "Away", "On Vacation"];
const PRONOUNS = ["She/Her", "He/His"];

const CEditProfile = ({ profile, opened, setOpenModal }) => {
  const [inputs, setInputs] = useState(profile);
  const [isLoading,setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSave = () => {
    /* Clarify the Update API */
    console.log(JSON.stringify(inputs))
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    },2000)
    /*
    axios.put(URL, JSON.stringify(inputs), {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      setInputs(() => inputs);
    }).catch((error) => {
      console.log(error);
      setInputs((prevInputs) => prevInputs);
    })
    */
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
              src={profile.avatar || "https://images.unsplash.com/photo-1611695434398-4f4b330623e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"}
            />

          <label className="absolute bottom-0 right-0">
            {/* That's not fisnished, but there is a place to load image */}
            <input onChange={(e) => console.log(e.target.files[0]) } type="file" accept="image/png, image/gif, image/jpeg" class="hidden" name="avatar"/>
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
                  checked={profile.availability_status === status.toLowerCase()}
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
              {multipleDataFormatting(profile.languages)}
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
                  checked={profile.pronouns === pronouns}
                  onChange={handleChange}
                  name="pronouns"
                  className="font-normal"
                  value={pronouns}
                />
              )
            })}
          </div>

          <h2 className="c-edit-profile__heading mb-2">Location</h2>
          <p className="c-edit-profile__copy mb-5">{profile.location}</p>

          <h2 className="c-edit-profile__heading mb-2">Contacts</h2>
          <MProfileInput
            defaultValue={profile.email}
            placeholder="email"
            icon="email"
            name="email"
            onChange={handleChange}
          />
          <MProfileInput
            defaultValue={profile.cell_phone}
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
                defaultValue={profile.twitter_url}
                placeholder="twitter account"
                name="twitter_url"
                icon="twitter"
                onChange={handleChange}
              />
              <MProfileInput
                defaultValue={profile.instagram_url}
                placeholder="instagram account"
                name="instagram_url"
                icon="instagram"
                onChange={handleChange}
              />
              <MProfileInput
                defaultValue={profile.linked_in_url}
                placeholder="linkedin account"
                name="linked_in_url"
                icon="linkedin"
                onChange={handleChange}
              />
              <MProfileInput
                defaultValue={profile.facebook_url}
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
            {profile.name}
          </h1>
          <p className="text-secondary-300 text-title7">{profile.clinic}</p>
          <p role="button" className="text-primary-500 text-title6 font-medium">Add/change clinic &#10132;</p>

          <textarea
            name="biography"
            onChange={handleChange}
            defaultValue={profile.biography}
            className="c-edit-profile__textarea"
            rows={9}

            />
          <h2 className="c-edit-profile__heading mb-3">Special Interests</h2>
          <textarea
            name="special_interests"
            onChange={handleChange}
            defaultValue={profile.special_interests}
            className="c-edit-profile__textarea"
            rows={5}
          />
          <h2 className="c-edit-profile__heading mb-3">Notify via sms</h2>
          <div className="flex gap-x-4.5">
              <ARadio
                checked={inputs.smsNotify=='Every message'}
                onChange={handleChange}
                name="smsNotify"
                className="font-normal"
                value="Every message"
              />
              <ARadio
                checked={inputs.smsNotify=='Once a day'}
                onChange={handleChange}
                name="smsNotify"
                className="font-normal"
                value="Once a day"
              />
              <ARadio
                checked={inputs.smsNotify=='Never'}
                onChange={handleChange}
                name="smsNotify"
                className="font-normal"
                value="Never"
              />
          </div>
          <h2 className="c-edit-profile__heading mt-4 mb-3">Notify via email</h2>
            <div className="flex gap-x-4.5">
              <ARadio
                checked={inputs.emailNotify=='Every message'}
                onChange={handleChange}
                name="emailNotify"
                className="font-normal"
                value="Every message"
              />
              <ARadio
                checked={inputs.emailNotify=='Once a day'}
                onChange={handleChange}
                name="emailNotify"
                className="font-normal"
                value="Once a day"
              />
              <ARadio
                checked={inputs.emailNotify=='Never'}
                onChange={handleChange}
                name="emailNotify"
                className="font-normal"
                value="Never"
              />
          </div>
          <div className="w-full flex justify-end">
            <AButton className="w-28" isLoading={ isLoading } onClick={ handleSave }>Save</AButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CEditProfile;
