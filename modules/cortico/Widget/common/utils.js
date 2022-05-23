import store from "../store/store.js";

export const handleTokenExpiry = (response, data) => {
  console.log("Handle Token Expiry", response, data);
  if (response.status === 401 && data.code === "token_not_valid") {
    store.dispatch({
      type: "app/set",
      payload: {
        refreshToken: {
          title: "Token Error",
          description:
            data?.messages[0]?.message || "Token is invalid or expired.",
        },
      },
    });
    return true;
  } else {
    return false;
  }
};
