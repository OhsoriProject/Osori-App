import React from "react";
import { Navigation1Home } from "screens/presenter/index";
import { useRecoilState } from "recoil";
import { testAtom } from "store/atom/common";
import { Dimensions, Image, SafeAreaView, Text, View } from "react-native";
import styled from "styled-components";
import Carousel from "react-native-snap-carousel";
import Tutorial1Png from "assets/images/pngs/Tutorial1.png";
import Tutorial2Png from "assets/images/pngs/Tutorial2.png";
import Tutorial3Png from "assets/images/pngs/Tutorial3.png";
import normalize from "utils/normalize";
import LinearGradient from "react-native-linear-gradient";
import { ButtonS, CardTutorial } from "components/index";

const TutorialItemList = [
  {
    image: Tutorial1Png,
    title: "간편한 채팅.",
    subtitle: `오소리에게 편하게 말을 걸어
지금 듣고싶은 음악을 추천받으세요.`,
  },
  {
    image: Tutorial2Png,
    title: "즐거운 감상.",
    subtitle: "추천받은 음악을 감상해 보아요.",
  },
  {
    image: Tutorial3Png,
    title: "플레이리스트 저장.",
    subtitle: `플레이리스트가 마음에 드셨다면
내 플레이리스트를 저장하세요!`,
  },
];

const TutorialScreen = ({ navigation }) => {
  const goMainScreen = () => {
    navigation.replace("BottomNavigation");
  };

  const _renderTutorial = ({ item, index }) => (
    <CardTutorial
      image={item.image}
      title={item.title}
      subtitle={item.subtitle}
    />
  );

  return (
    <ContainerGradient
      colors={["#69B2FF", "#68A5FF", "#A6B3FD", "#6619FF"]}
      locations={[0, 0.36, 0.68, 1]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1.1 }}
    >
      <Carousel
        sliderWidth={Dimensions.get("screen").width}
        data={TutorialItemList}
        itemWidth={normalize(268)}
        renderItem={_renderTutorial}
      />
      <ButtonS
        style={{ width: normalize(131) }}
        text={"시작하기"}
        onPress={goMainScreen}
      />
    </ContainerGradient>
  );
};

export default TutorialScreen;

const StyledBody = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

const ContainerGradient = styled(LinearGradient)`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-top: ${normalize(100, "height")}px;
  padding-bottom: ${normalize(54, "height")}px;
`;

const CarouselContainer = styled.View`
  align-items: center;
  width: ${normalize(268)}px;
`;
