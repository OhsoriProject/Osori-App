import {
  CardYoutube,
  HeaderM,
  ListMusicItem,
  ListPlaylist,
  ButtonS,
  InputS,
} from "components/index";
import React, { useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { UserIdAtom } from "store/atom/auth";

import styled from "styled-components";
import normalize from "utils/normalize";
import { useRecoilState } from "recoil";
import FlatlistMusics from "./Components/FlatlistMusics";
import YoutubeControl from "./Components/YoutubeControl";
import Modal from "react-native-modal";
import colors from "utils/colors";
import Space from "utils/styledSpace";
import {
  getPlaylistDetailRequest,
  postSavePlaylistRequest,
} from "api/PlaylistAPI";
import { getMessageById } from "api/MessageApi";

const TMP_VIDEO_LIST = ["", "vg6Iq_Es3Wk", "8dJyRm2jJ-U", "F9ldojZWBiM"];
const TMP_PLAYLIST = [
  { id: "vg6Iq_Es3Wk", name: "PSY - 'Celeb'" },
  { id: "8dJyRm2jJ-U", name: "PSY - 'That That (prod. & feat. SUGA of BTS)'" },
  {
    id: "F9ldojZWBiM",
    name: "박재범 (Jay Park) X MVP X HolyBang - ‘GANADARA (Feat. 아이유 IU)’",
  },
];

const ButtonStyleYES = {
  backgroundColor: colors.primary,
  borderRadius: normalize(50),
  width: normalize(200),
  flex: 1,
};
const ButtonStyleNO = {
  backgroundColor: colors.white,
  borderRadius: normalize(50),
  width: normalize(200),
  flex: 1,
};

const PlaylistDetailScreen = ({ navigation, route }) => {
  const youtubeRef = useRef();

  const [videoIndex, setVideoIndex] = useState(0);

  const [modalVisible, setModalVisible] = useState(false);
  const [playlists, setPlaylists] = useState([]);
  const [playlistId, setPlaylistId] = useState();

  const [playlistName, setPlaylistName] = useState("");

  const onPressMore = () => {
    setModalVisible(true);
  };

  const onPressModalYes = () => {
    if (playlistName.length > 0) {
      postSavePlaylist(playlistName, playlistId);
      setModalVisible(false);
    }
  };

  const onPressModalNo = () => {
    setModalVisible(false);
  };

  const handlePlaylistName = (text) => setPlaylistName(text);

  const postSavePlaylist = async (name, playlistId) => {
    try {
      await postSavePlaylistRequest(name, playlistId);
    } catch (e) {
      console.log(e);
    }
  };

  const generatePlaylists = (items) => {
    const playlists = [];
    items.forEach((music) => {
      playlists.push({ id: music.videoId, name: music.title });
    });
    setPlaylists(playlists);
  };

  const getPlaylistDetail = async () => {
    try {
      let result;
      if (route.params?.isChat) {
        result = await getMessageById(route.params.playlistId);
        setPlaylistId(result.playlistId);
        generatePlaylists(result.playlist);
      } else {
        console.log(route.params?.playlistId);
        result = await getPlaylistDetailRequest(route.params.playlistId);
        setPlaylistId(result.id);
        generatePlaylists(result.musics);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPlaylistDetail();
  }, []);

  return (
    <Body>
      <HeaderM title={route.params?.title} />
      <CardYoutube
        youtubeRef={youtubeRef}
        setVideoIndex={setVideoIndex}
        videoId={playlists[videoIndex]?.id}
        playlists={playlists}
      />
      <YoutubeControl
        onPressMore={onPressMore}
        currentTitle={playlists[videoIndex]?.name}
        setVideoIndex={setVideoIndex}
        playlists={playlists}
        videoIndex={videoIndex}
        isChat={route.params?.isChat}
      />
      <FlatlistMusics
        data={playlists}
        videoIndex={videoIndex}
        setVideoIndex={setVideoIndex}
      />
      <Modal isVisible={modalVisible}>
        <ModalContainer>
          <ModalWrapper>
            <ModalTitleText>플레이리스트를 저장할까요?</ModalTitleText>
            <ModalTitleSubText>
              플레이리스트 이름을 입력해주세요
            </ModalTitleSubText>
            <Space h={4} />
            <InputS
              placeholder="최고의 플레이리스트!"
              value={playlistName}
              onChangeText={handlePlaylistName}
            />
            <ModalButtonContainer>
              <ButtonS
                onPress={onPressModalYes}
                style={playlistName.length > 0 ? ButtonStyleYES : ButtonStyleNO}
                textColor={playlistName.length > 0 ? "#f4f4f4" : colors.gray}
                text="네 저장할께요"
              />
              <Space w={4} />
              <ButtonS
                onPress={onPressModalNo}
                style={ButtonStyleNO}
                textColor={colors.black}
                text="아니오"
              />
            </ModalButtonContainer>
          </ModalWrapper>
        </ModalContainer>
      </Modal>
    </Body>
  );
};

export default PlaylistDetailScreen;
const Body = styled(SafeAreaView)`
  flex: 1;
  background-color: white;
`;

const ModalContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

const ModalWrapper = styled.View`
  /* White */
  width: 100%;
  background: #f4f4f4;
  border-radius: 46px;
  padding: ${normalize(44)}px;
  align-items: center;
`;

const ModalTitleText = styled.Text`
  font-weight: 700;
  font-size: 22.5px;
  line-height: 30px;

  color: #000000;
`;

const ModalTitleSubText = styled.Text`
  font-weight: 700;
  font-size: 16px;
  line-height: 30px;

  margin-top: ${normalize(4, "height")}px;

  color: #000000;
`;

const ModalButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: ${normalize(16, "height")}px;
`;
