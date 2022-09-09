import dayjs from "dayjs";
import Alert from "../cortico/Widget/Alert";

const channelOptions = {
    "sms": "phone number",
    "email": "email address"
}

const SubscriptionContainer = ({
    channelName,
    channel,
    value,
    handleSubscriptionChange = null,
    consented,
    isSubscriptionsEmpty = false
}) => {

    const getTitle = () => {
        if (isSubscriptionsEmpty) {
            if (!consented) return "Patient has not yet consented";

            return `Patient has Consented last ${dayjs(consented).format("MMMM DD, YYYY")}`
        }

        if (channel === null) return `We do not yet have record of patient's ${channelOptions[channelName]}.`;

        if (channel === "invalid") return `The ${channelOptions[channelName]} of ${value} is invalid`;

        return `Patient is ${channel === "opt_in" ? "subscribed" : "unsubscribed"} at this ${channelOptions[channelName]}`;
    }

    const getVariant = () => {
        if (channel === null) return "info";

        if (channel === "invalid") return "error";

        return channel === "opt_in" ? "success" : "warning";
    }

    return (
        <Alert
            title={ getTitle() }
            className="tw-w-full tw-my-2"
            variant={ getVariant() }
        >
            <>
                { channel !== null ?
                    (
                        channel !== "invalid" ?
                            (
                                <p onClick={ handleSubscriptionChange } className="tw-font-bold tw-underline tw-cursor-pointer tw-mt-4">
                                    { `${channel === "opt_in" ? "Unsubscribe" : "Subscribe"} to ${value}` }
                                </p>
                            )
                            :
                            null
                    )
                    :
                    (
                        value ?
                            (
                                <>
                                    <p onClick={ (e) => handleSubscriptionChange(true) } className="tw-font-bold tw-underline tw-cursor-pointer tw-mt-4 tw-mb-1">
                                        Subscribe to { value }
                                    </p>
                                    <p onClick={ (e) => handleSubscriptionChange(false) } className="tw-font-bold tw-underline tw-cursor-pointer">
                                        Unsubscribe to { value }
                                    </p>
                                </>
                            )
                            :
                            (
                                <p className="tw-font-bold tw-mt-2">
                                    No { channelOptions[channelName] } provided.
                                </p>
                            )
                    )
                }

            </>
        </Alert>
    )
}

export default SubscriptionContainer