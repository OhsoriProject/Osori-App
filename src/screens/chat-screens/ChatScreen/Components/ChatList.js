import { ChattingBubble, PlaylistBubble } from "components/index";
import React from "react";
import styled from "styled-components";
import normalize from "utils/normalize";
import Space from "utils/styledSpace";

const ChatList = ({ messages }) => {
  const _renderItem = ({ item, index }) => {
    if (!item.hasOwnProperty("playlist")) {
      return (
        <>
          <ChattingBubble
            message={item.content}
            isMe={item.sender === "user"}
          />
          <Space h={16} />
        </>
      );
    } else {
      return (
        <>
          <PlaylistBubble />
          <Space h={16} />
        </>
      );
    }
  };
  return <ChatFlatList data={messages} renderItem={_renderItem} />;
};

export default ChatList;

const ChatFlatList = styled.FlatList`
  flex: 1;
  padding: 0px ${normalize(20)}px;
`;
