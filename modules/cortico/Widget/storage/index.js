import localforage from "localforage";

localforage.config({
  name: "cortico",
  driver: localforage.LOCALSTORAGE,
  description: "Stores Cortico's oscar enhancement suite settings",
});

export default localforage;
