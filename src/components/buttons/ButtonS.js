import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import normalize from "utils/normalize";

export const ButtonS = ({ text, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress && onPress}>
      <Container style={style}>
        <Text style={{ color: "#f4f4f4", fontWeight: "600" }}>{text}</Text>
      </Container>
    </TouchableOpacity>
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
