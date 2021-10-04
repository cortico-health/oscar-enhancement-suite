
import "./Login.css";
import { CorticoIcon } from "../../Icons/CorticoIcon";
import { create, getCorticoUrl } from "../../Utils/Utils";

export function addLoginForm(browser) {
  const currentUser = localStorage.getItem("currentUser");

  // if (getCorticoUrl() && currentUser == null)
  document.body.appendChild(loginForm(browser));
}

export function loginForm(browser) {
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

  if (!response.ok) {
    return alert('Login failed. Check username and password.')
  }

  if (response) {
    const json = JSON.parse(await response.text())

    browser = browser ? browser : chrome;

    if (browser) {
      browser.storage.local.set({ "jwt_access_token": json.access })
      browser.storage.local.set({ "jwt_expired": false })
      browser.storage.local.set({ "jwt_username": username })
    }

    const openMenu = document.querySelector(".login-form.show");
    openMenu.classList.remove("show");

    alert("Successfully signed in, the page will now reload")
    window.location.reload()
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
    console.error(err)
    if (('' + err).includes('Failed to fetch')) {
      alert('Cortico instance cannot be reached. Check clinic name.')
    } else {
      alert('Cortico: Unknown Login Error: ' + err)
    }
  })
}