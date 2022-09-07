const CEREBRO_URL = process.env.CEREBRO_URL;
const WEBSOCKET_URL = process.env.WEBSOCKET_URL;

export const getWsChatUrl = (id, accessToken) => {
    return `${WEBSOCKET_URL}/chat/${id}/?token=${accessToken}`;
}

export const getWsUpdateUrl = (accessToken) => {
    return `${WEBSOCKET_URL}/updates/?token=${accessToken}`;
}

export const CEREBRO_API_URL = CEREBRO_URL + "/api";