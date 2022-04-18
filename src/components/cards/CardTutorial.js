import React from "react";
import styled from "styled-components";
import { View, Text, Image } from "react-native";
import normalize from "utils/normalize";

const CardTutorial = ({ image, title, subtitle }) => {
  return (
    <CarouselContainer>
      <Image
        style={{ width: normalize(268), height: normalize(363) }}
        source={image}
      />
      <TitleText>{title}</TitleText>
      <SubTitleText
        style={{
          fontSize: 16,
          textAlign: "center",
          color: "#F4F4F4",
        }}
      >
        {subtitle}
      </SubTitleText>
    </CarouselContainer>
  );
};

export default CardTutorial;

const CarouselContainer = styled(View)`
  align-items: center;
  width: ${normalize(268)}px;
`;

const TitleText = styled(Text)`
  font-family: "GmarketSansTTFBold";
  margin-top: ${normalize(4)}px;
  margin-bottom: ${normalize(16)}px;
  font-size: 25;
  color: #f4f4f4;
`;

const SubTitleText = styled(Text)`
  font-family: "GmarketSansTTFMedium";
  font-size: 16;
  text-align: center;
  color: #f4f4f4;
  line-height: 21;
`;
