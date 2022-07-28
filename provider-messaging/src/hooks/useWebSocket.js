import React from 'react'

/* TODO: I'll transform this into hooks if I'll fully grasp the */

const useWebSocket = (url) => {
    const socket = new WebSocket('ws://localhost:8426/chat/1/');

    chatSocket.onmessage = (e) => {
        const data = JSON.parse(e.data);
        const newMessage = JSON.parse(data.text);
        console.log(data);
    }

    return socket;
}

export default useWebSocket