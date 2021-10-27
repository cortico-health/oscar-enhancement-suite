import { render } from "preact";
import corticoIcon from "../../resources/icons/96x96.png";

function Reply({ subject, body, ...props }) {
  return (
    <div className="tw-bg-white tw-rounded-lg tw-py-4 tw-cursor-pointer tw-hover:bg-gray-200 tw-h-28 ">
      <div className="tw-px-4 tw-mb-2 tw-text-opacity-100 tw-text-black">
        {subject}
      </div>
      <div className="tw-px-4 tw-text-sm tw-text-opacity-80 tw-text-black tw-line-clamp-3">
        {body}
      </div>
    </div>
  );
}

function SavedReplies() {
  return (
    <div className="tw-bg-white tw-rounded-lg tw-font-sans tw-min-w-[400px] tw-shadow-lg tw-max-w-[500px]">
      <div className="tw-bg-cortico-blue tw-flex tw-rounded-t-lg tw-p-4 tw-items-center">
        <div className="tw-bg-white tw-rounded-full tw-p-2">
          <img src={corticoIcon} alt="Cortico" className="tw-w-5 tw-h-5" />
        </div>
        <div className="tw-ml-4">
          <h2 className="tw-text-2xl tw-text-white tw-text-opacity-90 tw-tracking-wider">
            Saved Replies
          </h2>
          <p className="tw-text-xs tw-text-white tw-text-opacity-80">
            Save or load new replies to your message
          </p>
        </div>
      </div>
      <div className="tw-bg-gray-200 tw-p-4 tw-rounded-b-lg">
        <Reply
          subject="TELEHEALTH - LAB REQ TO DO"
          body={`Attached is a copy of your lab requisition form
            Please print and take to the lab 
            OR e-mail it with your name in the subject line to
            mailmyreqBC@lifelabs.com
            Please confirm via email once received/completed.
            Generally, patients are able to book a follow up online 2-3 days after getting their blood work done for a review unless indicated sooner via e-mail. 
            Thank you
            Medical clinic/doctor name`}
        />
      </div>
    </div>
  );
}

export default SavedReplies;
