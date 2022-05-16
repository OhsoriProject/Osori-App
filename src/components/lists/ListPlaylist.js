import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
import colors from "utils/colors";
import normalize from "utils/normalize";

const ListPlaylist = ({ url, title, songNum, onPress }) => {
  return (
    <Container onPress={onPress && onPress} as={TouchableOpacity}>
      <StyledImage source={{ url: url }} />
      <TitleContainer>
        <TitleText>{title}</TitleText>
        <SubtitleText>{songNum}곡</SubtitleText>
      </TitleContainer>
    </Container>
  );
};

export default ListPlaylist;

const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${normalize(16)};
`;

const StyledImage = styled.Image`
  width: ${normalize(124)}px;
  height: ${normalize(124)}px;
  margin-right: ${normalize(8)}px;
  background-color: ${colors.gray};
`;

const TitleContainer = styled.View`
  justify-content: center;
  flex: 1;
`;

const TitleText = styled.Text`
  font-weight: 800;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.5px;
  color: #000000;
`;

const SubtitleText = styled.Text`
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;

  letter-spacing: -0.5px;

  color: #c2c2c2;
`;
