import { useDispatch } from "react-redux";
import { PrimaryButton } from "../../core/Button";
import SignIn from "../../../resources/illustrations/undraw_signin.svg";

export default function RequiresLogin() {
    const dispatch = useDispatch();

    const handleSignIn = () => {
        dispatch({
            type: "sidebar/setCurrent",
            payload: "Account",
        });
    };

    return (
        <div className="tw-font-sans">
            <img
                src={ SignIn }
                alt="Sign In"
                className="tw-block tw-w-[125px] tw-mx-auto"
            />
            <div>
                <p className="tw-max-w-[325px] tw-mx-auto tw-mt-6 tw-text-gray-700 tw-text-sm tw-text-center">
                    This feature requires you to{ " " }
                    <span className="tw-font-semibold">sign in</span>{ " " }
                </p>
                <div className="tw-flex tw-justify-center tw-mt-4">
                    <PrimaryButton size="sm" onClick={ handleSignIn }>
                        Sign In
                    </PrimaryButton>
                </div>
            </div>
        </div>
    );
}
