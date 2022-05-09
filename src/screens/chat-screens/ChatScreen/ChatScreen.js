import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ChattingBubble, PlaylistBubble } from "components/index";

const ChatScreen = () => {
  return (
    <SafeAreaView>
      <Text>Hello World Navigation2</Text>
      <ChattingBubble message={"우울쓰"} isMe />
      <ChattingBubble message={"아이고"} />
      <PlaylistBubble />
    </SafeAreaView>
  );
};

export default ChatScreen;
