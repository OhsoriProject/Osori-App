import { HeaderM, ListPlaylist } from "components/index";
import React from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import styled from "styled-components";
import normalize from "utils/normalize";

const TMP_LIST = [
  { title: "작업하기 좋은 핫플 카페에서 들었던 음악", length: 24 },
  { title: "작업하기 좋은 핫플 카페에서 들었던 음악", length: 24 },
  { title: "작업하기 좋은 핫플 카페에서 들었던 음악", length: 24 },
  { title: "작업하기 좋은 핫플 카페에서 들었던 음악", length: 24 },
  { title: "작업하기 좋은 핫플 카페에서 들었던 음악", length: 24 },
  { title: "작업하기 좋은 핫플 카페에서 들었던 음악", length: 24 },
  { title: "작업하기 좋은 핫플 카페에서 들었던 음악", length: 24 },
  { title: "작업하기 좋은 핫플 카페에서 들었던 음악", length: 24 },
  { title: "작업하기 좋은 핫플 카페에서 들었던 음악", length: 24 },
  { title: "작업하기 좋은 핫플 카페에서 들었던 음악", length: 24 },
];

const PlaylistDetailScreen = ({ navigation }) => {
  const onPressPlaylist = () => {
    navigation.navigate("");
  };

  const _renderItem = ({ item, index }) => {
    return <ListPlaylist title={item.title} songNum={item.length} />;
  };
  return (
    <Body>
      <HeaderM title="플레이리스트 상세 타이틀" />
    </Body>
  );
};

export default PlaylistDetailScreen;
const Body = styled(SafeAreaView)`
  flex: 1;
  background-color: white;
`;
