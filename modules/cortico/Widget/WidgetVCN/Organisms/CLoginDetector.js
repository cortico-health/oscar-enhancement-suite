import { useSelector } from "react-redux";
import Header from "../../base/Header"
import RequiresLogin from "../../RequiresLogin"

const CLoginDetector = ({ children }) => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    if (isLoggedIn) return (<>{ children }</>)

    return (
        <div className="tw-max-w-[450px] tw-p-4">
            <div className="tw-font-sans tw-min-w-[400px] tw-p-4">
                <Header
                    title="Provider Messaging"
                    desc="Reach out to provider via the messenger."
                />
                <hr className="tw-my-6" />

                <RequiresLogin />
            </div>
        </div>
    )
}

export default CLoginDetector