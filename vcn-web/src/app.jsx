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
      <input id="chatMessage" type="text" />
      <button onClick={sendMessage}>Submit</button>
      <div id="messages">
      </div>
    </>
  )
}
