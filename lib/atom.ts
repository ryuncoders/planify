import { atom } from "recoil";

export const modeState = atom<"light" | "dark">({
  key: "modeState",
  default: "light",
});
