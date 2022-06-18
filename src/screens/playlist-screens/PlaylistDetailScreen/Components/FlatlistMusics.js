import { ListMusicItem } from "components/index";
import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components";
import normalize from "utils/normalize";

const FlatlistMusics = ({
  data,
  style,
  keyExtractor,
  videoIndex,
  setVideoIndex,
}) => {
  const renderItem = ({ item, index }) => (
    <ListMusicItem
      id={item.id}
      title={item.name}
      onPress={() => {
        setVideoIndex(index);
      }}
      isPlay={videoIndex == index}
    />
  );

  return (
    <StyledFlatlist
      style={style}
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};

export default FlatlistMusics;

const StyledFlatlist = styled(FlatList)`
  flex: 1;
  padding: 0px ${normalize(20)}px;
`;
