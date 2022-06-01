import {
  CardYoutube,
  HeaderM,
  ListMusicItem,
  ListPlaylist,
  ButtonS,
} from "components/index";
import React, { useRef, useState } from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import styled from "styled-components";
import normalize from "utils/normalize";
import FlatlistMusics from "./Components/FlatlistMusics";
import ModalPlaylistSave from "./Components/ModalPlaylistSave";
import YoutubeControl from "./Components/YoutubeControl";
import Modal from "react-native-modal";
import colors from "utils/colors";
import Space from "utils/styledSpace";

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

const PlaylistDetailScreen = ({ navigation }) => {
  const youtubeRef = useRef();

  const [videoIndex, setVideoIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const onPressMore = () => {
    setModalVisible(true);
  };

  const onPressModalYes = () => {
    setModalVisible(false);
  };

  const onPressModalNo = () => {
    setModalVisible(false);
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
        onPressMore={onPressMore}
        currentTitle={TMP_PLAYLIST[videoIndex].name}
      />
      <FlatlistMusics
        data={TMP_PLAYLIST}
        youtubeRef={youtubeRef}
        videoIndex={videoIndex}
      />
      <Modal isVisible={modalVisible}>
        <ModalContainer>
          <ModalWrapper>
            <ModalTitleText>플레이리스트를 저장할까요?</ModalTitleText>
            <ModalButtonContainer>
              <ButtonS
                onPress={onPressModalYes}
                style={ButtonStyleYES}
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

const ModalButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: ${normalize(40, "height")}px;
`;
