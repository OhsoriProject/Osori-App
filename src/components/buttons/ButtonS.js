import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import normalize from "utils/normalize";

export const ButtonS = ({ text, onPress, style, textColor }) => {
  return (
    <Container as={TouchableOpacity} onPress={onPress && onPress} style={style}>
      <StyledText textColor={textColor}>{text}</StyledText>
    </Container>
  );
};

const Container = styled(View)`
  width: 100%;
  padding: ${normalize(11)}px;
  background-color: #b695f9;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;

const StyledText = styled.Text`
  font-family: "GmarketSansTTFMedium";
  font-size: ${normalize(16)}px;
  color: ${({ textColor }) => (textColor ? textColor : "#f4f4f4")};
  font-weight: 600;
  text-align: center;
`;
