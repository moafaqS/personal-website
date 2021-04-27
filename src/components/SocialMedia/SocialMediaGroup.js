import React from "react"
import styled from "styled-components"
import SocialMediaButton from "../SocialMedia/SocialMediaButton"

function SocialMediaGroup() {
  var list = [
    ["/images/linkedin.svg", "https://www.google.com/"],
    ["/images/Twitter.svg", "https://www.google.com/"],
    ["/images/instgram.svg", "https://www.google.com/"],
  ]

  return (
    <Wrapper>
      {list.map(s => (
        <SocialMediaButton key={s} image={s[0]} link={s[1]} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
`

export default SocialMediaGroup
