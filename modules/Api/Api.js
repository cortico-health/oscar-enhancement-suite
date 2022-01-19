import { getCorticoUrl } from "../Utils/Utils";

export function sendMessage(data, token, opts) {
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
