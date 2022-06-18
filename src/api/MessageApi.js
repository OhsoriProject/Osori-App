import { getRequest, postRequest } from "./common";

export const getMessages = async () => {
  const response = await getRequest(`/chat`);
  return response;
};

export const postMessage = async (content) => {
  const response = await postRequest(`/chat`, { content });
  return response;
};

export const getMessageById = async (id) => {
  console.log(id);
  const response = await getRequest(`/chat/${id}`);
  return response;
};
