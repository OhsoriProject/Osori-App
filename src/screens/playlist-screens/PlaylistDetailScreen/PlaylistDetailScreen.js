import {
  CardYoutube,
  HeaderM,
  ListMusicItem,
  ListPlaylist,
} from "components/index";
import React, { useRef, useState } from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Modal,
} from "react-native";
import styled from "styled-components";
import normalize from "utils/normalize";
import FlatlistMusics from "./Components/FlatlistMusics";
import ModalPlaylistSave from "./Components/ModalPlaylistSave";
import YoutubeControl from "./Components/YoutubeControl";

const TMP_VIDEO_LIST = ["", "vg6Iq_Es3Wk", "8dJyRm2jJ-U", "F9ldojZWBiM"];
const TMP_PLAYLIST = [
  { id: "vg6Iq_Es3Wk", name: "PSY - 'Celeb'" },
  { id: "8dJyRm2jJ-U", name: "PSY - 'That That (prod. & feat. SUGA of BTS)'" },
  {
    id: "F9ldojZWBiM",
    name: "박재범 (Jay Park) X MVP X HolyBang - ‘GANADARA (Feat. 아이유 IU)’",
  },
];

const PlaylistDetailScreen = ({ navigation }) => {
  const youtubeRef = useRef();

  const [videoIndex, setVideoIndex] = useState(0);
  const [modalVisivle, setModalVisible] = useState(false);

  const onPressPlaylist = () => {
    navigation.navigate("");
  };

  return (
    <Body>
      <HeaderM title="플레이리스트 상세 타이틀" />
      <CardYoutube
        youtubeRef={youtubeRef}
        videoList={TMP_VIDEO_LIST}
        setVideoIndex={setVideoIndex}
      />
      <YoutubeControl
        youtubeRef={youtubeRef}
        onPressMore={() => setModalVisible(true)}
      />
      <FlatlistMusics
        data={TMP_PLAYLIST}
        youtubeRef={youtubeRef}
        videoIndex={videoIndex}
      />
      {/* <ModalPlaylistSave modalVisivle={modalVisivle} /> */}
    </Body>
  );
};

export default PlaylistDetailScreen;
const Body = styled(SafeAreaView)`
  flex: 1;
  background-color: white;
`;
