import Alert from "../cortico/Widget/Alert";

const channelOptions = {
    "sms": "phone number",
    "email": "email address"
}

const SubscriptionContainer = ({ channelName,channel,value,handleSubscriptionChange }) => {

    const getTitle = () => {
        if (channel === null) return "Info";

        if (channel === "invalid") return "Error";

        return channel === "opt_in" ? "Success" : "Warning";
    }

    const getMessage = () => {
        if (channel === null) return `We do not yet have record of patient ${channelOptions[channelName]}.`;

        if (channel === "invalid") return `The ${channelOptions[channelName]} of ${value} is invalid`

        return `Patient is ${channel === "opt_in" ? "subscribed" : "unsubscribed"} at this ${channelOptions[channelName]}`
    }

    return (
        <Alert
            title={ getTitle() }
            message={ getMessage() }
            className="tw-w-full tw-my-2"
            variant={ getTitle().toLowerCase() }
        >
            <>
                {/* from [] */ }
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