/* TODO Dwight: Will change this if the met.env is functional */
const envCerebroApiUrl = import.meta.env?.VITE_CEREBRO_URL || "https://cerebro-develop.cortico.ca";
const envWebSocketUrl = import.meta.env?.VITE_CEREBRO_URL || "wss://cerebro-develop.cortico.ca";

// const envcerebroApiUrl = import.meta.env?.VITE_CEREBRO_URL || "http://localhost:8426";
// const envWebSocketUrl = import.meta.env?.VITE_CEREBRO_URL || "ws://localhost:8426";

export const getWsChatUrl = (id, accessToken) => {
    return `${envWebSocketUrl}/chat/${id}/?token=${accessToken}`;
}

export const getWsUpdateUrl = (accessToken) => {
    return `${envWebSocketUrl}/updates/?token=${accessToken}`;
}

export const cerebroApiUrl = envCerebroApiUrl + "/api";

export const cerebroUrl = envCerebroApiUrl;