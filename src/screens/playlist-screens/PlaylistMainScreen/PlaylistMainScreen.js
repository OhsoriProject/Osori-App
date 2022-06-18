import { getPlaylistsRequest } from "api/PlaylistAPI";
import { HeaderM, ListPlaylist } from "components/index";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { UserIdAtom } from "store/atom/auth";
import styled from "styled-components";
import normalize from "utils/normalize";
import { useRecoilState } from "recoil";

const PlaylistMainScreen = ({ navigation }) => {
  const [playlists, setPlaylists] = useState();

  const onPressPlaylist = (playlistId) => {
    navigation.navigate("PlaylistDetailScreen", { playlistId, isChat: false });
  };

  const getPlayList = async () => {
    try {
      const result = await getPlaylistsRequest();
      setPlaylists(result.playlists);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPlayList();
  }, []);

  const _renderItem = ({ item, index }) => {
    return (
      <ListPlaylist
        onPress={() => onPressPlaylist(item.id)}
        title={item.name}
        songNum={item.length}
        url={item.thumbnail}
      />
    );
  };
  return (
    <Body>
      <HeaderM hasBack={false} title="플레이리스트" />
      <FlatList
        style={{ flex: 1, paddingHorizontal: normalize(22) }}
        data={playlists}
        renderItem={_renderItem}
      />
    </Body>
  );
};

export default PlaylistMainScreen;
const Body = styled(SafeAreaView)`
  flex: 1;
  background-color: white;
`;
