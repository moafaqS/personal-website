import React from "react";
import styled from "styled-components";
import { H3, BodyIntro, BodyMain } from "../styles/textStyle";

export const ServicesSection = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Title>
          <span>-</span> Services <span>-</span>
        </Title>
        <ServicesWrapper>
          <Service>
            <Icon src="/images/1973807.svg"></Icon>
            <ServiceTitle>Creative Writing</ServiceTitle>
          </Service>
          <Service>
            <Icon src="/images/1973807.svg"></Icon>
            <ServiceTitle>UX Writing</ServiceTitle>
          </Service>
          <Service>
            <Icon src="/images/1973807.svg"></Icon>
            <ServiceTitle>Script Development</ServiceTitle>
          </Service>
          <Service>
            <Icon src="/images/1973807.svg"></Icon>
            <ServiceTitle>Voice over text</ServiceTitle>
          </Service>
          <Service>
            <Icon src="/images/1973807.svg"></Icon>
            <ServiceTitle>News Editing</ServiceTitle>
          </Service>
        </ServicesWrapper>
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
  grid-template-rows: repeat(2, auto);
  grid-gap: 50px;
  padding: 130px 30px;
  position: relative;
  justify-items: center;
`;
const Title = styled(H3)``;
const ServicesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
  width: 80%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const Service = styled.div`
  display: grid;
  grid-template-rows: 130px 50px;
  padding: 20px;
  border-radius: 2%;
  justify-items: center;
  transition: 0.3s ease-in-out;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
`;
const Icon = styled.img`
  width: 100px;
`;
const ServiceTitle = styled(BodyMain)``;
