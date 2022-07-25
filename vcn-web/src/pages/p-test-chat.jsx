import React from 'react'
import MSend from '../components/molecules/m-send'

const PTestChat = () => {
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
            <div class="w-11/12 m-auto">
                <div id="messages">
                </div>
                <div class="w-full mt-4">
                    {/* TODO: Temporary for testing might be deleted */}
                    <input id="chatMessage" 
                        type="text" 
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 p-2.5"
                    />
                    <button onClick={sendMessage} 
                        class="ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg 
                        text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                        Send
                    </button>
                </div>
                
            </div>
        </>
    )
}

export default PTestChat