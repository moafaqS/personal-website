import React from "react";
import styled, { keyframes } from "styled-components";
import { H1, H2 } from "../styles/textStyle";
import { themes } from "../styles/colorStyle";
import SocialMediaGroup from "../SocialMedia/SocialMediaGroup";
import WaveBackground from "../Background/BackgroundWave";
import { BoxesWave } from "../Background/BoxesWave";

function HeroSection() {
  return (
    <Wrapper>
      {/* <WaveBackground /> */}
      <ContentWrapper>
        <BoxesWave />
        <TextWrapper>
          <WelcomeText>Hi i'm</WelcomeText>
          <Name>Mayaser</Name>
          <Role>Writer - blogger</Role>
          <SocialMediaGroup />
        </TextWrapper>
        <MockupWrapper>
          <Mockup />
        </MockupWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

export default HeroSection;

const animation = keyframes`
  0%{
    opacity : 0;
    transform : translateY(-10px); filter : blur(10px);
  }

  100%{
    opacity : 1;
    transform : translateY(0px); filter : blur(0px);
  }

`;

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
`;
const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 130px 30px;
  display: grid;
  grid-template-columns: 320px auto;
  grid-gap: 100px;
  position: relative;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    /* padding: 150px 20px 150px; */
    gap: 60px;
  }
`;

const TextWrapper = styled.div`
  position: relative;
  max-width: 320px;
  display: grid;
  grid-gap: 30px;
  align-self: center;
  animation: ${animation} 1s;

  > * {
    opacity: 0;
    animation: ${animation} 1s forwards;

    :nth-child(1) {
      animation-delay: 0s;
    }
    :nth-child(2) {
      animation-delay: 0.2s;
    }
    :nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`;

const MockupWrapper = styled.div`
  position: relative;
  animation: ${animation} 1s forwards;

  @media (max-width: 768px) {
    transform: scale(0.6);
    transform-origin: left;
  }
  @media (max-width: 450px) {
    transform-origin: top left;
    transform: scale(0.4);
  }
`;

const Mockup = styled.div`
  background: url("/images/undraw_winter_designer_a2m7 1.svg");
  width: 878px;
  height: 606px;
  left: 0px;
  top: 0px;
`;

const WelcomeText = styled(H2)`
  color: rgb(139, 130, 139);
`;
const Name = styled(H1)`
  color: ${themes.light.text1};
`;
const Role = styled(H2)`
  color: ${themes.light.text2};
`;
