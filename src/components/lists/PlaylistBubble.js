import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styled from "styled-components";
import normalize from "utils/normalize";
import colors from "utils/colors";

const PlaylistBubble = ({ item, onPress }) => {
  return (
    <Container>
      <View style={{ display: "flex" }}>
        <PlaylistContainer>
          <PlaylistImage />
          <PlaylistInfoContainer>
            <PlaylistTitleText>오소리가 추천한 Playlist</PlaylistTitleText>
            {/* <PlaylistSubTitleText>장르: 발라드, R&B</PlaylistSubTitleText> */}
            <PlaylistSubTitleText>
              {item.playlist[0].title}외 {item.playlist.length - 1}곡
            </PlaylistSubTitleText>
          </PlaylistInfoContainer>
        </PlaylistContainer>
        <TouchableOpacity onPress={onPress && onPress}>
          <BubbleContainer>
            <MessageText>감상하기</MessageText>
          </BubbleContainer>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default PlaylistBubble;

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const BubbleContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${normalize(4)}px ${normalize(8)}px;
  border-radius: 24.97px;
  margin: 0px ${normalize(2)}px;
  background-color: ${colors.secondary};

  margin-top: ${normalize(16)}px;
`;

const MessageText = styled(Text)`
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  color: #f4f4f4;
  line-height: 21px;
`;

const PlaylistContainer = styled.View`
  width: ${normalize(160)}px;
  border: 1px solid #b695f9;
  border-radius: 10px;
`;

const PlaylistImage = styled(Image)`
  width: ${normalize(158)}px;
  height: ${normalize(160)}px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #e2e2e2;
`;

const PlaylistTitleText = styled(Text)`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #000000;
`;

const PlaylistSubTitleText = styled(Text)`
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 12px;
  color: #a0a0a0;
`;

const PlaylistInfoContainer = styled.View`
  display: flex;
  flex-direction: column;
  padding: ${normalize(4)}px ${normalize(8)}px;
`;
