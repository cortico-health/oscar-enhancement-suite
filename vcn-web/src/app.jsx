import AButton from "./components/atoms/a-button";
import CNav from "./components/organisms/c-nav";

export function App() {
  const chatSocket = new WebSocket('ws://localhost:8426/chat/1/');

  const sendMessage = (e) => {
    const messageEl = document.getElementById('chatMessage')
    const message = messageEl.value
    chatSocket.send(JSON.stringify({
      'body': message,
    }));
    messageEl.value = ''
  }

  chatSocket.onmessage = (e) => {
    const data = JSON.parse(e.data);
    const newMessage = JSON.parse(data.text);
    document.getElementById('messages').innerHTML += newMessage.body
  }

  return (
    <>
      <CNav />
      {/* <AButton className='w-full block' variant='button-secondary-sm'> Select patient</AButton> */}
      <input id="chatMessage" type="text" />
      <button onClick={sendMessage}>Submit</button>
      <div id="messages">
      </div>
    </>
  )
}
