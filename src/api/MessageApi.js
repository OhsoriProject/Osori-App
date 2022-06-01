import { getRequest, postRequest } from "./common";

export const getMessages = async (userid) => {
  const response = await getRequest(`/chat/${userid}`);
  return response;
};

export const postMessage = async (userid, content) => {
  const response = await postRequest(`/chat/${userid}`, { content });
  return response;
};
