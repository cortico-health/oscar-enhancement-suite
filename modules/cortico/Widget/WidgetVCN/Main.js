import MChatTools from "./Molecules/MChatTools"


const Main = () => {
    return (
        <div className="tw-relative tw-h-full tw-flex tw-flex-col tw-justify-between tw-overflow-x-hidden tw-w-[1000px]">
            <MChatTools
                setMessages={ null }
                selectedConversationInfo={ null }
            />
        </div>
    )
}

export default Main