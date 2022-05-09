import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ButtonS, ChattingBubble, PlaylistBubble } from "components/index";
import styled from "styled-components";
import normalize from "utils/normalize";
import Logo from "assets/images/pngs/LogoGrad.png";
import Space from "utils/styledSpace";
import colors from "utils/colors";

const ChatMainScreen = ({ navigation }) => {
  const ButtonStyle = {
    backgroundColor: colors.primary,
    borderRadius: normalize(50),
    width: normalize(200),
  };
  return (
    <Body>
      <Container>
        <LogoImage source={Logo} />
        <Space h={60} />
        <TitleText>오소리가 기다리고 있어요.</TitleText>
        <TitleText>편하게 채팅을 해보세요!</TitleText>
        <Space h={40} />
        <ButtonS
          style={ButtonStyle}
          onPress={() => {
            navigation.navigate("ChatScreen");
          }}
          text={"채팅 시작하기"}
        />
      </Container>
    </Body>
  );
};

export default ChatMainScreen;

const Body = styled(SafeAreaView)`
  flex: 1;
  background-color: white;
`;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const LogoImage = styled.Image`
  width: ${normalize(166)}px;
  height: ${normalize(169)}px;
`;

const TitleText = styled(Text)`
  font-family: "GmarketSansTTFMedium";
  font-size: 20px;
  text-align: center;
  color: #000000;
  line-height: 30px;
`;
