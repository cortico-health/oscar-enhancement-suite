import { h } from "preact";
import { Router } from "preact-router";

// import Header from './components/organisms/header';

// Code-splitting is automated for `pages` directory

import PHome from "./pages/p-home";
import PProfile from "./pages/p-profile";
import PUi from "./pages/p-ui";
import CNav from "./components/organisms/c-nav";
import PChat from "./pages/p-chat";
import PSelect from "./pages/p-select";
import PAddToChat from "./pages/p-add-to-chat";
import { useEffect, useState } from "preact/hooks";
import CEditProfile from "./components/organisms/c-edit-profile";
import { useStore } from "./state";
import { usersData } from "./data";
import { observable } from "mobx";
import { observer } from "mobx-react-lite";

export const App = observer(() => {
  const { getUser, store } = useStore();

  const [inputs, setInputs] = useState({
    email: usersData[0].email,
    password: ''
  });

  addEventListener(
    "hashchange",
    () => {
      if (location.hash == "#profile") {
        setEditProfile(true);
      }
    },
    false
  );

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value })
  }

  const handleLogin = (e) => {
    e.preventDefault();
    store.login(inputs.email, inputs.password)
  }

  useEffect(() => {
    getUser();
    history.pushState(null, null, " ");
  }, []);

  const [editProfile, setEditProfile] = useState(false);

  return (
    <div id="app">

      {store.user && Object.keys(store.user).length !== 0 ? (
        <>
          {/* <CEditProfile profile={store.user.profile} opened={editProfile} setOpenModal={setEditProfile} /> */}
          <CNav />
          <main className="min-h-screen bg-secondary-10 lg:ml-20 ml-0">
            <Router>
              <PHome path="/" />
              <PChat path="/chat" />
              <PChat path="/chat/:id" />
              <PSelect path="/select" />
              <PAddToChat path="/add-to-chat" />
              <PProfile path="#profile" user="me" />
              <PProfile path="/profile/:user" />
              <PUi path="/ui" />
            </Router>
          </main>
        </>
      ) : <form className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" onSubmit={handleLogin}>
        <div className="mb-2">
          <label htmlFor="email">Email:</label>
          <input className="ml-2 border border-primary-500" defaultValue={inputs.email} onChange={onChange} name="email" />
        </div>
        {/* No need to write anything - it's just mock just click Login, eventually write some email from usersData from data.js file */}
        <div className="mb-2">
          <label htmlFor="password">Password:</label>
          <input className="ml-2 border border-primary-500" onChange={onChange} defaultValue={inputs.password} placeholder="No need to write anything" type="password" name="password" />
        </div>
        <div className="flex justify-center items-center w-full">
          <button className="block px-2 py-2 bg-primary-500 text-white rounded-md" type="submit">Login</button>
        </div>
      </form>}
    </div>
  );
});
