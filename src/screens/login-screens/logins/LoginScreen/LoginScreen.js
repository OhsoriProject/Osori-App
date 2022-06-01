import React from "react";
import {
  Dimensions,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  ButtonS,
  ChatInput,
  ChattingBubble,
  InputS,
  PlaylistBubble,
} from "components/index";
import styled from "styled-components";
import normalize from "utils/normalize";
import Logo from "assets/images/pngs/LogoSplash1.png";
import Space from "utils/styledSpace";
import colors from "utils/colors";
import LinearGradient from "react-native-linear-gradient";
import { postSignIn } from "api/AuthApi";
import { useRecoilState } from "recoil";
import { UserIdAtom } from "store/atom/auth";

const LoginScreen = ({ navigation }) => {
  const [id, setId] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [user, setUser] = useRecoilState(UserIdAtom);

  const onPressLogin = async () => {
    try {
      const result = await postSignIn(id, password);
      setUser(result);
      navigation.replace("BottomNavigation");
    } catch (e) {
      console.log("signupError", e);
    }
  };
  const goSignupScreen = () => {
    navigation.replace("SignupScreen");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ContainerGradient
        colors={["#69B2FF", "#68A5FF", "#A6B3FD", "#6619FF"]}
        locations={[0, 0.36, 0.68, 1]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1.1 }}
      >
        <Space h={100} />
        <LogoImage source={Logo} />
        <Space h={20} />
        <TitleText>LOGIN</TitleText>
        <Space h={20} />
        <InputContainer>
          <InputS placeholder="ID" value={id} onChangeText={setId} />
          <Space h={20} />
          <InputS
            placeholder="PASSWORD"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </InputContainer>
        <Space h={40} />
        <ButtonS style={ButtonStyle} onPress={onPressLogin} text={"로그인"} />
        <Space h={8} />
        <CaptionText>아직 회원이 아니신가요?</CaptionText>
        <ButtonS
          style={ButtonStyleSignUp}
          onPress={goSignupScreen}
          text={"회원가입"}
        />
      </ContainerGradient>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const ButtonStyle = {
  backgroundColor: colors.primary,

  width: Dimensions.get("screen").width - normalize(100),
};
const ButtonStyleSignUp = {
  width: Dimensions.get("screen").width - normalize(100),
};
const LogoImage = styled.Image`
  width: ${normalize(217)}px;
  height: ${normalize(240)}px;
`;

const TitleText = styled(Text)`
  font-family: "GmarketSansTTFMedium";
  font-size: 20px;
  text-align: center;
  color: ${colors.white};
  line-height: 30px;
`;

const CaptionText = styled(Text)`
  font-family: "GmarketSansTTFMedium";
  font-size: 12px;
  text-align: center;
  color: ${colors.white};
  line-height: 30px;
`;

const ContainerGradient = styled(LinearGradient)`
  flex: 1;
  align-items: center;
`;

const InputContainer = styled.View`
  width: 100%;
  padding: 0px ${normalize(50)}px;
`;
