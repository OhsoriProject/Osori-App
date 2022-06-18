import { ChattingBubble, PlaylistBubble } from "components/index";
import React from "react";
import styled from "styled-components";
import normalize from "utils/normalize";
import Space from "utils/styledSpace";
import { useNavigation } from "@react-navigation/native";

const ChatList = ({ messages }) => {
  const navigation = useNavigation();
  const onPressPlaylist = (playlistId) => {
    console.log(playlistId);
    navigation.navigate("PlaylistDetailScreen", {
      playlistId,
      isChat: true,
      title: "오소리가 추천한 Playlist",
    });
  };
  const _renderItem = ({ item, index }) => {
    if (item.sender == "user") {
      return (
        <>
          <Space h={16} />
          <ChattingBubble message={item.content} isMe={item.sender == "user"} />
        </>
      );
    } else {
      return (
        <>
          {item.hasOwnProperty("playlist") && (
            <>
              <Space h={16} />
              <PlaylistBubble
                item={item}
                onPress={() => onPressPlaylist(item.id)}
              />
            </>
          )}
          <Space h={16} />
          <ChattingBubble message={item.content} isMe={item.sender == "user"} />
        </>
      );
    }
  };
  return (
    <ChatFlatList
      inverted
      data={[...messages].reverse()}
      renderItem={_renderItem}
    />
  );
};

export default ChatList;

const ChatFlatList = styled.FlatList`
  flex: 1;
  padding: 0px ${normalize(20)}px;
`;
