import React from "react"
import styled from "styled-components"

export default function WaveBackground() {
  return (
    <Wrapper>
      <Background />
      <Wave src="/images/hero-wave1.svg" style={{ top: "100px" }} />
      <Wave src="/images/hero-wave2.svg" style={{ top: "350px" }} />
      <Wave src="/images/hero-wave3.svg" style={{ top: "550px" }} />
    </Wrapper>
  )
}

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 800px;
  background: rgb(233, 235, 247);
  z-index: -1;
`

const Wrapper = styled.div`
  position: relative;
`

const Wave = styled.img`
  position: absolute;
  z-index: -1;
`
