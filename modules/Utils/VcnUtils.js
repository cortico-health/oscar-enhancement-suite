export const cerebroURL = import.meta.env.VITE_CEREBRO_URL || "http://localhost:8426/api";

export const getAccessToken = localStorage["vcnAccessToken"] || null;