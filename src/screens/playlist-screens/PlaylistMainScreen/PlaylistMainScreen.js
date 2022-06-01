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
  const [user] = useRecoilState(UserIdAtom);

  const onPressPlaylist = (playlistId) => {
    navigation.navigate("PlaylistDetailScreen", { playlistId });
  };

  const getPlayList = async () => {
    try {
      const result = await getPlaylistsRequest(user.id);
      setPlaylists(result.playlists);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPlayList();
  }, [user]);

  const _renderItem = ({ item, index }) => {
    return (
      <ListPlaylist
        onPress={onPressPlaylist}
        title={item.title}
        songNum={item.length}
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
