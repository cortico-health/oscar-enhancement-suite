import React from "react";

/* TODO: I'll transform this into hooks if I'll fully grasp the behaviour of WebSocket in Preact */

const useWebSocket = (url) => {
  const socket = new WebSocket(`${import.meta.env.VITE_WEBSOCKET_URL}/chat/1/`);

  chatSocket.onmessage = (e) => {
    const data = JSON.parse(e.data);
    const newMessage = JSON.parse(data.text);
    console.log(data);
  };

  return socket;
};

export default useWebSocket;
