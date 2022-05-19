import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { Thumbnail } from "react-native-thumbnail-video";
import styled from "styled-components";
import colors from "utils/colors";
import normalize from "utils/normalize";

const ListMusicItem = ({ id, onPress, title, isPlay }) => {
  return (
    <Container
      isPlay={isPlay}
      as={TouchableOpacity}
      onPress={onPress && onPress}
    >
      <Thumbnail
        imageHeight={normalize(69)}
        imageWidth={normalize(141)}
        url={`https://youtu.be/${id}`}
        showPlayIcon={false}
        onPress={() => {
          if (onPress) {
            onPress();
          }
        }}
      />
      <TitleContainer>
        <TitleText>{title}</TitleText>
      </TitleContainer>
    </Container>
  );
};

export default ListMusicItem;

const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  background: ${({ isPlay }) => (isPlay ? colors.gray + "40" : "#ffffff")};
  box-shadow: 1px 4px 5px rgba(0, 0, 0, 0.3);
  border-radius: 0px;
  margin-bottom: ${normalize(16)}px;
`;

const TitleContainer = styled.View`
  padding: 0px ${normalize(16)}px;
  flex: 1;
  justify-content: center;
`;

const TitleText = styled.Text`
  font-weight: 700;
  font-size: 9.90726px;
  line-height: 14px;
  color: #000000;
`;
