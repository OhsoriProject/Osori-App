import { ChattingBubble, PlaylistBubble } from "components/index";
import React from "react";
import styled from "styled-components";
import normalize from "utils/normalize";
import Space from "utils/styledSpace";

const ChatList = ({ messages }) => {
  console.log(messages);
  const _renderItem = ({ item, index }) => {
    if (!item.hasOwnProperty("playlist")) {
      return (
        <>
          <Space h={16} />
          <ChattingBubble
            message={item.content}
            isMe={item.sender === "user"}
          />
        </>
      );
    } else {
      return (
        <>
          <Space h={16} />
          <PlaylistBubble />
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
