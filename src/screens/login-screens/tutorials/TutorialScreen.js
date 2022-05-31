import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { Dimensions } from "react-native";
import styled from "styled-components";
import Carousel from "react-native-snap-carousel";
import Tutorial1Png from "assets/images/pngs/Tutorial1.png";
import Tutorial2Png from "assets/images/pngs/Tutorial2.png";
import Tutorial3Png from "assets/images/pngs/Tutorial3.png";
import normalize from "utils/normalize";
import LinearGradient from "react-native-linear-gradient";
import { ButtonS, CardTutorial } from "components/index";
import { UserIdAtom } from "store/atom/auth";
import { TutorialItemList } from "./constant";

const TutorialScreen = ({ navigation }) => {
  const [user] = useRecoilState(UserIdAtom);
  const goLoginScreen = () => {
    navigation.replace("LoginScreen");
  };

  useEffect(() => {
    if (user.id !== null) {
      navigation.replace("BottomNavigation");
    }
  }, [user]);

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
        onPress={goLoginScreen}
      />
    </ContainerGradient>
  );
};

export default TutorialScreen;

const ContainerGradient = styled(LinearGradient)`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-top: ${normalize(100, "height")}px;
  padding-bottom: ${normalize(54, "height")}px;
`;
