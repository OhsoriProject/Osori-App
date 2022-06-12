import { getRequest, postRequest } from "./common";

export const getMessages = async (userid) => {
  const response = await getRequest(`/chat`);
  return response;
};

export const postMessage = async (userid, content) => {
  const response = await postRequest(`/chat`, { content });
  return response;
};
