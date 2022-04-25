import { getCorticoUrl, getOrigin, getNamespace } from "../Utils/Utils";

export function RefreshTokenDecorator(response, accessToken) {
  console.log("Refresh Token Decorator Request");
  return response
    .then((res) => {
      if (res.status === 401) {
        loadExtensionStorageValue("jwt_refresh_token")
          .then((refreshToken) => {
            if (refreshToken) {
              return refreshToken(refreshToken);
            } else {
              throw Error("Could not refresh token");
            }
          })
          .then((res) => {
            if (res.status !== 200) {
              throw Error("Could not refresh token");
            } else {
              return res.json();
            }
          })
          .then((json) => {
            saveExtensionStorageValue("jwt_refresh_token", json.refresh);
            saveExtensionStorageValue("jwt_access_token", json.access);
            saveExtensionStorageValue("jwt_expired", false);
            console.log("Retry response object", response);
            return fetch(response.url, response.init);
          })
          .catch((error) => {
            return Promise.reject(error);
          });
      } else {
        return Promise.resolve(res);
      }
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

export function sendEmail(data, token, opts) {
  const url = getCorticoUrl() + "/api/plug-in/email-form/";
  return RefreshTokenDecorator(
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      mode: "cors",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }),
    token
  );
}

export function sendMessage(data, token, opts) {
  const url = getCorticoUrl() + "/api/plug-in/custom-message/";
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    mode: "cors",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export function getCannedReplies(token) {
  const url = getCorticoUrl() + "/api/plug-in/messages/";
  return fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export function deleteCannedReply(id, token) {
  const url = getCorticoUrl() + `/api/plug-in/messages/${id}/?action=delete`;
  return fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export function addCannedReply(data, token) {
  const url = getCorticoUrl() + "/api/plug-in/messages/";
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    mode: "cors",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export function getEncounterNotes(demographicNo) {
  const payload = {
    method: "viewNotesOpt",
    offset: 0,
    numToReturn: 20,
    demographicNo,
  };
  const url = getOrigin() + "/" + getNamespace() + "/CaseManagementView.do";
  return fetch(url, {
    method: "POST",
    body: new URLSearchParams(payload),
    headers: {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
  });
}

export function addEncounterNote(demographicNo, note_id, programId, note) {
  return postCaseManagementEntry(demographicNo, {
    method: "autosave",
    demographicNo,
    note_id,
    programId,
    note,
  });
}

export function postCaseManagementEntry(
  demographicNo,
  payload = {
    method: "edit",
    demographicNo,
    ajaxview: "ajaxView",
    fullChart: false,
    action: "view",
  }
) {
  const url = getOrigin() + "/" + getNamespace() + "/CaseManagementEntry.do";
  return fetch(url, {
    method: "POST",
    body: new URLSearchParams(payload),
    headers: {
      accept: "text/javascript, text/html, application/xml, text/xml, */*",
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "x-prototype-version": "1.5.1.1",
      "x-requested-with": "XMLHttpRequest",
    },
  });
}

export function getClinicSettings(token) {
  const url = `${getCorticoUrl()}/api/public/clinic-settings/`;
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
}

export function getBootstrap(token) {
  const url = `${getCorticoUrl()}/api/plug-in/bootstrap/`;
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
}

export function refreshToken(refreshToken) {
  const url = `${getCorticoUrl()}/api/plug-in/refresh/`;
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(refreshToken),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
}
