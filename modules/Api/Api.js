import { getCorticoUrl } from "../Utils/Utils";

export function sendEmailForm(data, token) {
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
