import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import normalize from "utils/normalize";
import IcMore from "assets/images/svgs/IcMore.svg";
import IcNext from "assets/images/svgs/IcNext.svg";
import Modal from "react-native-modal";
import { ButtonS } from "components/index";

const YoutubeControl = ({
  youtubeRef,
  onPressMore,
  currentTitle = "제목",
  setVideoIndex,
  videoIndex,
  playlists,
  isChat,
}) => {
  const onPressPrevious = () => {
    // youtubeRef.current.previousVideo();
    if (videoIndex > 0) setVideoIndex((p) => p - 1);
    else setVideoIndex(playlists.length - 1);
  };
  const onPressNext = () => {
    // youtubeRef.current.nextVideo();
    if (videoIndex < playlists.length - 1) setVideoIndex((p) => p + 1);
    else setVideoIndex(0);
  };

  return (
    <ControlContainer>
      <ControlWrapper>
        <ControlItem
          style={{ transform: [{ rotate: "180deg" }] }}
          onPress={onPressPrevious}
        >
          <IcNext width={30} height={30} />
        </ControlItem>
        <ControlItem onPress={onPressNext}>
          <IcNext width={30} height={30} />
        </ControlItem>
        <TitleText numberOfLines={1}>{currentTitle}</TitleText>
      </ControlWrapper>
      <TouchableOpacity onPress={onPressMore && onPressMore}>
        <IcMore />
      </TouchableOpacity>
    </ControlContainer>
  );
};

export default YoutubeControl;

const Container = styled.View``;
const ControlContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${normalize(8)}px ${normalize(16)}px;
`;

const ControlItem = styled.TouchableOpacity`
  width: ${normalize(36)}px;
  height: ${normalize(36)}px;
  border-radius: ${normalize(20)}px;
  /* background-color: #b695f9; */
  align-items: center;
  justify-content: center;
  margin-right: ${normalize(8)}px;
`;

const ControlWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

const TitleText = styled.Text`
  font-weight: 700;
  font-size: 17.4828px;
  line-height: 24px;
  flex: 1;

  color: #000000;
`;
