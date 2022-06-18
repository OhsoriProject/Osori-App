import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import normalize from "utils/normalize";
import IcSend from "assets/images/svgs/IcSend.svg";

const ChatInput = ({ value, onChangeText, onPress }) => {
  return (
    <Container>
      <StyledInput
        value={value}
        onChangeText={onChangeText && onChangeText}
        placeholder="우울할 때 들을만한 신나는 음악 추천해줘!"
      />
      <TouchableOpacity onPress={onPress && onPress}>
        <IcSend />
      </TouchableOpacity>
    </Container>
  );
};

export default ChatInput;

const Container = styled.View`
  width: 100%;
  padding: ${normalize(4)}px ${normalize(20)}px;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid #c2c2c2;
  border-radius: 50px;
`;

const StyledInput = styled.TextInput``;
