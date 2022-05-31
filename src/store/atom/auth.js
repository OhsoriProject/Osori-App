import { atom } from "recoil";
import { persistAtom } from "./persist";

export const UserIdAtom = atom({
  key: "UserIdAtom",
  default: {
    id: null,
    nickname: null,
  },
  effects_UNSTABLE: [persistAtom("UserIdAtom")],
});
