import React from "react";
import styled from "styled-components";
import SocialMediaButton from "../SocialMedia/SocialMediaButton";

function SocialMediaGroup() {
  var list = [
    ["/images/linkedin.svg", "https://www.linkedin.com/in/mayaser-simbawa/"],
    ["/images/Twitter.svg", "/"],
    [
      "/images/instgram.svg",
      "https://www.instagram.com/mayaser/?igshid=wdhgltb5owbq",
    ],
  ];

  return (
    <Wrapper>
      {list.map((s) => (
        <SocialMediaButton key={s} image={s[0]} link={s[1]} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
`;

export default SocialMediaGroup;
