import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

export default function SocialMediaButton({ image, link }) {
  return (
    <Link to={link}>
      <Wrapper>
        <Icon src={image} />
      </Wrapper>
    </Link>
  )
}

const Wrapper = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);

  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    transform: translateY(-3px);
  }

  position: relative;
`
const Icon = styled.img`
  width: 55px;
  height: 55px;
`
