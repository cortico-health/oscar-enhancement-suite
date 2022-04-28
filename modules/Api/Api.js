import {
  getCorticoUrl,
  getOrigin,
  getNamespace,
  loadExtensionStorageValue,
  saveExtensionStorageValue,
} from "../Utils/Utils";

export function RefreshTokenDecorator(fn) {
  return function () {
    return new Promise((resolve, reject) => {
      fn.apply(this, arguments)
        .then((res) => {
          if (res.status === 401) {
            loadExtensionStorageValue("jwt_refresh_token")
              .then((jwt_refresh_token) => {
                if (jwt_refresh_token) {
                  return refreshToken(jwt_refresh_token);
                } else {
                  reject(
                    "Could not refresh token. Please sign out and sign in again."
                  );
                }
              })
              .then((res) => {
                if (res.status !== 200) {
                  reject(
                    "Could not refresh token. Please sign out and sign in again."
                  );
                } else {
                  return res.json();
                }
              })
              .then((json) => {
                saveExtensionStorageValue("jwt_access_token", json.access);
                saveExtensionStorageValue("jwt_expired", false);
                arguments[0] = json.access;
                console.log("Retrying here", json, arguments);
                return resolve(fn.apply(this, arguments));
              });
          } else {
            return resolve(res);
          }
        })
        .catch((error) => {
          console.error(error);
          reject(error);
        });
    });
  };
}

export const sendEmail = RefreshTokenDecorator((token, data) => {
  const url = getCorticoUrl() + "/api/plug-in/email-form/";

  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    mode: "cors",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
});

export const sendMessage = RefreshTokenDecorator((token, data, opts) => {
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
});

export const getCannedReplies = RefreshTokenDecorator((token) => {
  const url = getCorticoUrl() + "/api/plug-in/messages/";
  return fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
});

export const deleteCannedReply = RefreshTokenDecorator((token, id) => {
  const url = getCorticoUrl() + `/api/plug-in/messages/${id}/?action=delete`;
  return fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
});

export const addCannedReply = RefreshTokenDecorator((token, data) => {
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
});

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

export const getClinicSettings = RefreshTokenDecorator((token) => {
  const url = `${getCorticoUrl()}/api/public/clinic-settings/`;
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
});

export const getBootstrap = RefreshTokenDecorator((token) => {
  const url = `${getCorticoUrl()}/api/plug-in/bootstrap/`;
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
});

export function refreshToken(refreshToken) {
  const url = `${getCorticoUrl()}/api/token/refresh/`;
  return fetch(url, {
    method: "POST",
    body: JSON.stringify({
      refresh: refreshToken,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
