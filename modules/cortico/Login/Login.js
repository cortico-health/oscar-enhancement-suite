import { Ellipsis } from "../../Icons/Ellipsis";
import "./Login.css";
import { CorticoIcon } from "../../Icons/CorticoIcon";
import { create, getCorticoUrl } from "../../Utils/Utils";

export function addLoginForm(browser) {
  const currentUser = localStorage.getItem("currentUser");

  if (!getCorticoUrl()) {
    alert("Please set the cortico url")

    return
  }

  // if (getCorticoUrl() && currentUser == null)
  document.body.appendChild(loginForm(browser));
}

export function loginForm(browser) {
  const menuIcon = Ellipsis();
  const menu = create("div", {
    attrs: {
      class: "login-form",
    },
  });

  const container = create(
    "div",
    {
      attrs: {
        class: "login-form-container",
      },
    },
    menuIcon,
    menu
  );

  const wrapper = create(
    "div",
    {
      attrs: {
        class: "login-form-wrapper",
      },
    },
    container
  );

  container.addEventListener("click", (e) => {

    // close button doesn't re-open
    if (e.target.className == 'login-form-close') { return }

    const openMenu = document.querySelector(".login-form.show");
    if (openMenu) {
      openMenu.classList.remove("show");
    }
    menu.classList.toggle("show");
  });

  const title = create("div", {
    attrs: {
      class: "login-form-header",
    },
  });

  const corticoIcon = CorticoIcon({
    attrs: {
      height: "15",
    },
  });
  title.appendChild(corticoIcon);

  const h5 = create("h5", {
    attrs: {
      class: "color-primary login-form-heading",
    },
    text: "Cortico",
  });

  title.appendChild(h5);

  menu.appendChild(title);

  const close = create("div", {
    attrs: {
      class: "login-form-close"
    },
    text: "x"
  })
  menu.appendChild(close);
  close.addEventListener("click", (e) => {
    const openMenu = document.querySelector(".login-form.show");
    openMenu.classList.remove("show");
  });

  const linkHeading = create("h5", {
    attrs: {
      class: "login-form-subheading",
    },
    text: "Cortico Login Form",
  });

  const username = create("input", {
    attrs: {
      type: "text"
    },
    placeholder: "Username"
  })
  const password = create("input", {
    attrs: {
      type: "password"
    },
    placeholder: "Password"
  })
  const signInButton = create("button", {
    text: "Sign in"
  })

  signInButton.addEventListener("click", (e) => {
    const loginUserName = username.value;
    const loginPassword = password.value;

    corticoSignIn(loginUserName, loginPassword, browser)
  })

  menu.appendChild(linkHeading);
  menu.appendChild(username);
  menu.appendChild(password);
  menu.appendChild(signInButton);

  wrapper.appendChild(container);
  return wrapper;
}

export async function corticoSignIn(username, password, browser) {
  const response = await signInRequest(username, password)

  if (response) {
    const json = JSON.parse(await response.text())

    browser = browser ? browser : chrome;

    if (browser) {
      browser.storage.local.set({ "jwt_access_token": json.access })
      browser.storage.local.set({ "jwt_expired": false })
    }

    const openMenu = document.querySelector(".login-form.show");
    openMenu.classList.remove("show");
  }
}

export async function signInRequest(username, password) {
  const data = {
    "username": username,
    "password": password
  }
  const url = getCorticoUrl() + '/api/token/';

  return fetch(url, {
    "method": 'POST',
    "headers": {
      "Content-Type": "application/json"
    },
    "body": JSON.stringify(data)
  }).catch((err) => {
    alert("Please make sure your credentials are correct and Cortico is online")
  })
}