import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import normalize from "utils/normalize";
import IcMore from "assets/images/svgs/IcMore.svg";

const YoutubeControl = ({ youtubeRef, onPressMore, currentTitle = "제목" }) => {
  const onPressPrevious = () => {
    youtubeRef.current.previousVideo();
  };
  const onPressNext = () => {
    youtubeRef.current.nextVideo();
  };

  return (
    <ControlContainer>
      <ControlWrapper>
        <ControlItem onPress={onPressPrevious}></ControlItem>
        <ControlItem onPress={onPressNext}></ControlItem>
        <TitleText>{currentTitle}</TitleText>
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
  background-color: #b695f9;
  align-items: center;
  justify-content: center;
  margin-right: ${normalize(8)}px;
`;

const ControlWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const TitleText = styled.Text`
  font-weight: 700;
  font-size: 17.4828px;
  line-height: 24px;

  color: #000000;
`;
