import React from "react";
import styled from "styled-components";
import { H1, H2, H3, BodyIntro, BodyMain } from "../styles/textStyle";

export const AboutMeSection = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Title>
          <span>-</span> About Me <span>-</span>
        </Title>
        <Image src="/images/1614932209122.jpeg" />
        <TextWrapper>
          <Name>Mayaser Simbawa</Name>
          <Summery>
            <p>
              I resented the gap between what I’ve been learning and what I’ve
              been practicing, so I decided to balance it.
            </p>

            <p>
              worked on the field of digital media & communications for almost 5
              years, and gained through it the passion for writing, and whether
              it was for the purpose of news or creativey, I made sure to master
              the whole process, from ideation to delivering final pieces. Which
              resulted in enabling me to become a stronger strategist, analyst
              and storyteller.
            </p>

            <p>
              As a researcher in the field, i believe I could combine my
              experience and tactics with the theoretical framework to produce
              more efficient methods & solutions for students, journalist and
              everyone in the circle, with specific goals in mind; reducing the
              gap and helping the local industry to reach its full potential.
            </p>

            <p>
              There’s still long way to go, but this is the mission I’m
              committed to, and I’m planning to spread the word!
            </p>
          </Summery>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
`;
const ContentWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-gap: 50px;
  padding: 130px 30px;
  position: relative;
  justify-items: center;
`;
const Title = styled(H3)``;
const Image = styled.img`
  border-radius: 50%;
  width: 300px;
  height: 300px;
`;
const TextWrapper = styled.div`
  box-sizing: border-box;
  width: 60%;

  @media (max-width: 768px) {
    width: 80%;
    font-size: 15px;
  }
`;
const Name = styled(BodyIntro)``;
const Summery = styled(BodyMain)`
  text-align: justify;
  * {
    padding-top: 15px;
  }

  @media (max-width: 768px) {
    font-size: 16p;
  }
`;
