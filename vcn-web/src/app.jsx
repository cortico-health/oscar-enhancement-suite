import Router from "preact-router";
import { useState } from "preact/hooks";

//Components
import CNav from "./components/organisms/c-nav";
import { usersData } from "./data";

//Pages
import PChat from "./pages/p-chat";
import PTestChat from "./pages/p-test-chat";
import { useStateValue } from "./state";

export function App() {

  const {auth} = useStateValue();

  if(!auth){
    return <div>loading...</div>
  }

  return (
    <>
      <CNav />
      <main className="min-h-screen bg-secondary-10 lg:ml-20 ml-0">
        <Router>
          <PTestChat path="/" />
          <PChat path="/chat" />
          <PChat path="/chat/:id" />
        </Router>
      </main>
      {/* <input id="chatMessage" type="text" />
      <button onClick={sendMessage}>Submit</button>
      <div id="messages">
      </div> */}
    </>
  )
}
