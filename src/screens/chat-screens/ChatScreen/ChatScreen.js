import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ChattingBubble, PlaylistBubble } from "components/index";
import ChatList from "./Components/ChatList";
import styled from "styled-components";

const messages = [
  { content: "나 오늘 우울해", sender: "me", type: "chat" },
  {
    content: "우울할 땐 이런 음악을 들어보세요!",
    sender: "osori",
    type: "chat",
  },
  {
    content: "우울할 땐 이런 음악을 들어보세요!",
    sender: "osori",
    genre: "발라드, 댄스",
    type: "playlist",
  },
  { content: "고마워 잘 들을께", sender: "me", type: "chat" },
];

const ChatScreen = () => {
  return (
    <Body>
      <ChatList messages={messages} />
    </Body>
  );
};

export default ChatScreen;

const Body = styled(SafeAreaView)`
  flex: 1;
  background-color: white;
`;
