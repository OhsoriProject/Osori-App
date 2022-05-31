import { postRequest } from "./common";

export const postSignUp = async (email, password, nickname) => {
  const response = await postRequest("/signup", { email, password, nickname });
  return response;
};

export const postSignIn = async (email, password) => {
  const response = await postRequest("/signin", { email, password });
  return response;
};
