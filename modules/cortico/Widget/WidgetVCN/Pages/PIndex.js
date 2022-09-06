import { useEffect, useState } from "preact/hooks";
import { useStore } from "../../store/mobx";
import CMessageList from '../Organisms/CMessageList'
import Sidebar from '../Sidebar'
import { observer } from "mobx-react-lite";
import { getWsChatUrl } from "../../../../Utils/VcnUtils";

const PIndex = () => {
  const { patientStore, conversationStore } = useStore();
  /* const router = useRouter()[0]; */

  const getMostRecentConversation = () => {
    return _.first(conversationStore.conversations)
  }

  useEffect(() => {
    return () => {
      conversationStore.conversations.selected = null;
    }
  }, [])

  useEffect(() => {
    // Justin: Disable this behavior for now
    // Reason: It auto selects patient on conversation select, so user cannot see all conversations
    // if (!_.has(router.matches, 'id')) {
    //   const mostRecentConversation = getMostRecentConversation()
    //   if (mostRecentConversation) route(`/chat/${mostRecentConversation.id}`)
    // }
  }, [conversationStore.conversations.all]);

  return (
    <div id="upload-confirm" className="tw-relative tw-flex tw-w-full tw-h-full">
      <Sidebar />

      <CMessageList />
    </div>
  )
}

export default observer(PIndex);