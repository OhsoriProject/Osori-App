import React from "react";
import { Navigation1Home } from "screens/presenter/index";
import { useRecoilState } from "recoil";
import { testAtom } from "store/atom/common";
import { SafeAreaView, Text, View } from "react-native";
import styled from "styled-components";

const TutorialScreen = () => {
  const [testRecoilValue, setTestRecoilValue] = useRecoilState(testAtom);
  const onPressUp = () => {
    setTestRecoilValue((p) => p + 1);
  };
  const onPressDown = () => {
    setTestRecoilValue((p) => p - 1);
  };
  return (
    <StyledBody>
      <Container>
        <Text>아이고</Text>
      </Container>
    </StyledBody>
  );
};

export default TutorialScreen;

const StyledBody = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
