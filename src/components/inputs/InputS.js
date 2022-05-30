import React from "react";
import { TextInput } from "react-native";
import styled from "styled-components";
import colors from "utils/colors";
import normalize from "utils/normalize";

// default textinput
const InputS = (props) => {
  return (
    <Container>
      <StyledTextInput {...props} />
    </Container>
  );
};

export default InputS;

const Container = styled.View`
  width: 100%;
  padding: ${normalize(12)}px ${normalize(20)}px;
  background-color: ${colors.white};
  /* border-radius: 50px; */
  border-radius: 6px;
`;

const StyledTextInput = styled(TextInput)`
  font-size: ${normalize(16)};
`;
