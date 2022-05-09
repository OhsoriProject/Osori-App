import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
import normalize from "utils/normalize";
import colors from "utils/colors";

const ChattingBubble = ({ message, isMe, onPress }) => {
  return (
    <Container isMe={isMe}>
      <BubbleSmall isMe={isMe} />
      <BubbleContainer isMe={isMe}>
        <MessageText isMe={isMe}>{message}</MessageText>
      </BubbleContainer>
    </Container>
  );
};

export default ChattingBubble;

const Container = styled.View`
  display: flex;
  flex-direction: ${({ isMe }) => (isMe ? "row-reverse" : "row")};
  align-items: flex-end;
  justify-content: flex-start;
`;

const BubbleContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${normalize(4)}px ${normalize(8)}px;
  border-radius: 24.97px;
  margin: 0px ${normalize(2)}px;
  background-color: ${(props) =>
    props.isMe ? colors.primary : colors.secondary};
`;

const BubbleSmall = styled.View`
  min-width: 9px;
  min-height: 9px;
  max-width: 9px;
  max-height: 9px;
  background-color: ${(props) =>
    props.isMe ? colors.primary : colors.secondary};
  border-radius: 9px;
`;

const MessageText = styled(Text)`
  font-weight: 700;
  font-size: 16;
  text-align: center;
  color: #f4f4f4;
  line-height: 21;
`;
