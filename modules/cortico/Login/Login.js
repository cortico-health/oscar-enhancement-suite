import { Ellipsis } from "../../Icons/Ellipsis";
import "./Login.css";
import { CorticoIcon } from "../../Icons/CorticoIcon";
import { create, getCorticoUrl, checkCorticoUrl } from "../../Utils/Utils";

export function addLoginForm(browser) {
  const currentUser = localStorage.getItem("currentUser");

  // if (getCorticoUrl() && currentUser == null)
  document.body.appendChild(loginForm(browser));
}

export function loginForm(browser) {
  const menuIcon = Ellipsis();

  const corticoIcon = CorticoIcon({
    attrs: {
      height: "15",
    },
  });

  const wrapper = create(
    `<div class='login-form-wrapper'>
      <div class='login-form-container'>
        <div class='login-form'>
          <div class='login-form-close'>x</div>
          <div class='login-form-header'>
            ${corticoIcon.outerHTML}
            <h5 class='color-primary login-form-heading'>Cortico</h5>
          </div>
          <h5 class='color-primary login-form-subheading'>Cortico Login Form</h5>
          <input type='text' placeholder='Username' id='loginUsername' />
          <input type='password' placeholder='Password' id='loginPassword' />
          <button type='button' id='loginButton'>Sign in</button>
        </div>
        ${menuIcon.outerHTML}
      </div>
    </div>`,
    {
      events: {
        "click .login-form-close": (e) => {
          const openMenu = document.querySelector(".login-form.show");
          openMenu.classList.remove("show");
        },
        "click #loginButton": (e) => {
          const loginUserName = document.getElementById("loginUsername").value;
          const loginPassword = document.getElementById("loginPassword").value;

          corticoSignIn(loginUserName, loginPassword, browser)
        }
      },
    }
  );

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