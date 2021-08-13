//import "./Action.css";
import { render } from "preact";

export default function () {
    const container = document.querySelector(".cortico-modal");

    const Action = () => {
        return (
            <div className="tw-flex tw-text-xl tw-h-[800px]">
                <div className="tw-w-full tw-p-4">Content goes here</div>
            </div>
        );
    };
    return render(<Action />, document.querySelector('action-root'));
}