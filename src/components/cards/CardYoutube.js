import React, { useRef } from "react";
import { TouchableOpacity, View } from "react-native";
import YouTube from "react-native-youtube";
import styled from "styled-components";
import normalize from "utils/normalize";

import IcMore from "assets/images/svgs/IcMore.svg";

let beforeState = "unstarted";

const CardYoutube = ({
  youtubeRef,
  videoList = [],
  setVideoIndex,
  videoId,
  playlists,
  videoIndex,
}) => {
  const onReadyVideo = async () => {
    const musicIndex = await youtubeRef.current?.getVideosIndex();
    console.log("아아아", musicIndex);
    setVideoIndex(musicIndex);
  };
  return (
    <Container>
      <YouTube
        ref={youtubeRef}
        // videoId="8dJyRm2jJ-U" // The YouTube video ID
        videoId={videoId}
        // videoIds={videoList}
        play // control playback of video with true/false
        fullscreen // control whether the video should play in fullscreen or inline
        // loop // control whether the video should loop when ended
        onChangeState={(e) => {
          // onReadyVideo();
          // console.log("아아아", e);
          if (
            (beforeState == "buffering" && e.state == "unstarted") ||
            e.state == "ended"
          ) {
            if (videoIndex < playlists.length - 1) setVideoIndex((p) => p + 1);
            else setVideoIndex(0);
          }
          beforeState = e.state;
        }}
        onReady={(e) => {
          // console.log(e);
          console.log(e);
        }}
        // onChangeState={(e) => {}}
        onChangeQuality={(e) => {}}
        onError={(e) => {}}
        style={{ alignSelf: "stretch", height: normalize(220) }}
      />
    </Container>
  );
};

export default CardYoutube;

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
