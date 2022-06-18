import React, { useEffect, useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  ChatInput,
  ChattingBubble,
  HeaderM,
  PlaylistBubble,
} from "components/index";
import ChatList from "./Components/ChatList";
import styled from "styled-components";
import normalize from "utils/normalize";
import { useRecoilState } from "recoil";
import { UserIdAtom } from "store/atom/auth";
import { getMessages, postMessage } from "api/MessageApi";

const TMP_MESSAGES = [
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
  const [messages, setMessages] = useState([]);

  const onChangeText = (text) => {
    setText(text);
  };

  const getUserMessageList = async () => {
    try {
      const result = await getMessages();
      console.log(result);
      setMessages([
        ...result.chats,
        { content: "어떤 음악을 들려드릴까요?", sender: "bot" },
        {
          content: "현재 상황, 감정, 장르, 듣고싶은 분위기등을 이야기하면",
          sender: "bot",
        },
        { content: "오소리가 음악을 찾아드릴께요", sender: "bot" },
      ]);
    } catch (e) {
      console.log(e);
    }
  };

  const onSend = async () => {
    if (text.length == 0) return;
    let newMessage = [...messages, { content: text, sender: "user" }];
    setMessages(newMessage);
    setText("");
    try {
      const result = await postMessage(text);
      let lastMessage = [...newMessage, { ...result, sender: "bot" }];
      setMessages(lastMessage);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUserMessageList();
  }, []);

  return (
    <Body>
      <HeaderM title={"오소리"} />
      <ChatList messages={messages} />
      <StyledKeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "none"}
      >
        <ChatInput value={text} onChangeText={onChangeText} onPress={onSend} />
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
