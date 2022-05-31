import { CardYoutube, HeaderM } from "components/index";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native";
import { UserIdAtom } from "store/atom/auth";
import styled from "styled-components";
import normalize from "utils/normalize";
import { useRecoilState } from "recoil";
import FlatlistMusics from "./Components/FlatlistMusics";
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

const PlaylistDetailScreen = ({ navigation, route }) => {
  const youtubeRef = useRef();

  const [user] = useRecoilState(UserIdAtom);

  const [videoIndex, setVideoIndex] = useState(0);
  const [modalVisivle, setModalVisible] = useState(false);
  const [playlistDetail, setPlaylistDetail] = useState({});

  const onPressPlaylist = () => {
    navigation.navigate("");
  };

  const getPlaylistDetail = async () => {
    try {
      const result = await getPlaylistDetailRequest(
        user.id,
        route.params.playlistId
      );
      setPlaylistDetail(result.playlist);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPlaylistDetail();
  }, [user]);

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
