import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ChatInput, ChattingBubble, PlaylistBubble } from "components/index";
import ChatList from "./Components/ChatList";
import styled from "styled-components";
import normalize from "utils/normalize";

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
  const [text, setText] = useState("");
  const onChangeText = (text) => {
    setText(text);
  };

  return (
    <Body>
      <ChatList messages={messages} />
      <StyledKeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "none"}
      >
        <ChatInput value={text} onChangeText={onChangeText} />
      </StyledKeyboardAvoidingView>
    </Body>
  );
};

export default ChatScreen;

const Body = styled(SafeAreaView)`
  flex: 1;
  background-color: white;
`;

const StyledKeyboardAvoidingView = styled(KeyboardAvoidingView)`
  padding: 0px ${normalize(20)}px;
`;
