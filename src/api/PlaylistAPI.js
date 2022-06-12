import { deleteRequest, getRequest, postRequest } from "./common";

export const getPlaylistsRequest = async (userid) => {
  const response = await getRequest(`/playlist`);
  return response;
};

export const getPlaylistDetailRequest = async (userid, playlistId) => {
  const response = await getRequest(`/playlist/${playlistId}`);
  return response;
};

export const postSavePlaylistRequest = async (userid, name, musics) => {
  const response = await postRequest(`/playlist`, { name, musics });
  return response;
};

export const deletePlaylistsRequest = async (userid, playlistId) => {
  const response = await deleteRequest(`/playlist/${playlistId}`);
  return response;
};
