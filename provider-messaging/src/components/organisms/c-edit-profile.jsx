import { h } from "preact";

import ASvg from "../atoms/a-svg";
import AButton from "../atoms/a-button";
import ARadio from "../atoms/a-radio";

import { usersData } from "../../data";
import { useState } from "preact/hooks";
import MProfileInput from "../molecules/m-profile-input";

const CEditProfile = ({ profile = usersData[0], opened, setOpenModal }) => {
  const [inputs, setInputs] = useState(profile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

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
              src={profile.avatar}
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
            <ARadio
              checked={inputs.status=='Online'}
              onChange={handleChange}
              name="status"
              className="font-normal"
              value="Online"
            />
            <ARadio
              checked={inputs.status=='Unavailable'}
              onChange={handleChange}
              name="status"
              className="font-normal"
              value="Unavailable"
            />
            <ARadio
              checked={inputs.status=='Away'}
              onChange={handleChange}
              name="status"
              className="font-normal"
              value="Away"
            />
          </div>

          <h2 className="c-edit-profile__heading mb-2">Languages</h2>
          <div className="flex items-center gap-x-2.5 mb-5">
            <p className="c-edit-profile__copy">
              {profile.languages.toString().replace(/,/g, ", ")}
            </p>
            <ASvg
              role="button"
              className="child-hover:fill-primary-700 w-6 h-6"
              src="add"
            />
          </div>

          <h2 className="c-edit-profile__heading mb-2">Pronouns</h2>
          <div className="flex gap-x-7">
            <ARadio
              checked={inputs.pronouns=='She/Her'}
              onChange={handleChange}
              name="pronouns"
              className="font-normal"
              value="She/Her"
            />
            <ARadio
              checked={inputs.pronouns=='He/His'}
              onChange={handleChange}
              name="pronouns"
              className="font-normal"
              value="He/His"
            />
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
            defaultValue={profile.phone}
            placeholder="phone"
            icon="phone"
            name="phone"
            onChange={handleChange}
          />
          
            <>
              <div className="mt-6 mb-4.5 flex justify-between">
                <h2 className="c-edit-profile__heading"> Socials </h2>
                <p className="text-select1 text-secondary-300">(optional)</p> 
              </div>
              <div className="pb-11">
                <MProfileInput
                  defaultValue={profile.twitter}
                  placeholder="twitter account"
                  icon="twitter"
                  name="twitter"
                  onChange={handleChange}
                />
                <MProfileInput
                  defaultValue={profile.instagram}
                  placeholder="instagram account"
                  icon="instagram"
                  name="instagram"
                  onChange={handleChange}
                />
                <MProfileInput
                  defaultValue={profile.linkedin}
                  placeholder="linkedin account"
                  icon="linkedin"
                  name="linkedin"
                  onChange={handleChange}
                />
                <MProfileInput
                  defaultValue={profile.facebook}
                  placeholder="facebook account"
                  name="facebook"
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
            name="bio"
            onChange={handleChange}
            defaultValue={profile.bio} 
            className="c-edit-profile__textarea"
            rows={9}
            
            />
          <h2 className="c-edit-profile__heading mb-3">Special Interests</h2>
          <textarea 
            name="interests"
            onChange={handleChange}
            defaultValue={profile.interests} 
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
          <AButton className="w-28" onClick={() => alert(JSON.stringify(inputs, null, 2))}>Save</AButton>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CEditProfile;
