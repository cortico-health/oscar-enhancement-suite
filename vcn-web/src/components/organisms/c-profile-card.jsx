import { h } from "preact";
import ASvg from '../atoms/a-svg';
import AButton from '../atoms/a-button';

const CProfileCard = ({ profile, opened, setOpenModal }) => {
  return (
    <div
      className={`${
        opened ? "flex" : "hidden"
      } c-profile-card py-4`}
    >
      <div className="flex max-h-full overflow-y-scroll bg-secondary-20 relative">
        <ASvg onClick={() => setOpenModal(false)} className="absolute cursor-pointer top-3 right-3" src="exit"/>
        <div className="c-profile-card__left-section">
          <div className="o-aspect-ratio o-aspect-ratio--4:5 w-56 mb-7">
            <img className="o-aspect-ratio__content rounded-2xl object-cover" src={profile.avatar} />
          </div>

          <h2 className="c-profile-card__heading mb-2">Status</h2>
          <p className="c-profile-card__copy mb-5">Available</p>

          <h2 className="c-profile-card__heading mb-2">Languages</h2>
          <p className="c-profile-card__copy mb-5">{ profile.languages.toString().replace(/,/g, ', ')}</p>

          <h2 className="c-profile-card__heading mb-2">Pronouns</h2>
          <p className="c-profile-card__copy mb-5">{profile.pronouns}</p>

          <h2 className="c-profile-card__heading mb-2">Location</h2>
          <p className="c-profile-card__copy mb-5">{ profile.location }</p>

          <h2 className="c-profile-card__heading mb-2">Contacts</h2>
          <a href={`mailto:${profile.email}`} className="text-primary-500 text-title4 block mb-1.5">{profile.email}</a>
          <a href={`tel:${profile.phone}`} className="text-primary-500 text-title4 block mb-5">{profile.phone}</a>

      { profile.twitter || profile.instagram || profile.linkedin || profile.facebook &&
        <>
          <h2 className="c-profile-card__heading mb-4.5"> Socials </h2>
          <div className="flex gap-x-3 pb-11">
            { profile.twitter ?<a href={profile.twitter}><ASvg src='twitter' /></a>: null }
            { profile.instagram ? <a href={profile.instagram}><ASvg src='instagram' /></a> : null }
            { profile.linkedin ? <a href={profile.linkedin}><ASvg src='linkedin' /></a> : null }
            { profile.facebook ? <a href={profile.facebook}><ASvg src='facebook' /></a> : null }
          </div> </> }
        </div>

        <div className="c-profile-card__right-section">
          <h1 className="font-bold text-secondary-500 text-title1 mb-2"> {profile.name}</h1>
          <p className="font-medium text-secondary-300">{ profile.clinic }</p>

          <div className="flex gap-x-2.5 mb-1">
            <AButton className='w-36' variant='button-primary-sm'>Send Message</AButton>
            <AButton className='w-24' variant='button-secondary-sm'>Mute</AButton>
          </div>

          <p className="text-secondary-300 text-description border-b border-secondary-100 pb-4.5 mb-8">
            {profile.bio}
          </p>

          <h2 className="c-profile-card__heading mb-3">Special Interests</h2>
          <p className="text-description text-secondary-300">{profile.interests}</p>
        </div>
      </div>
    </div>
  );
};

export default CProfileCard;
