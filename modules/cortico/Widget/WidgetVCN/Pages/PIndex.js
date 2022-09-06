import { useEffect } from "preact/hooks";
import { useStore } from "../../store/mobx";
import CMessageList from '../Organisms/CMessageList'
import Sidebar from '../Sidebar'
import { observer } from "mobx-react-lite";

const PIndex = () => {
  const { conversationStore } = useStore();

  useEffect(() => {
    return () => {
      conversationStore.conversations.selected = null;
    }
  }, [])

  return (
    <div id="upload-confirm" className="tw-relative tw-flex tw-w-full tw-h-full">
      <Sidebar />

      <CMessageList />
    </div>
  )
}

export default observer(PIndex);