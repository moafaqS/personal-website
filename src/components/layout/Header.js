import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
import { menuData } from "../../Data/MenuData"
import { MenuButton } from "../Buttons/MenuButton"
import MenuToolTip from "../tooltib/MenuToolTip"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  function handleClick(event) {
    setIsOpen(!isOpen)
    event.preventDefault()
  }

  return (
    <Wrapper>
      <MenuWrapper>
        {menuData.map((item, index) => (
          <MenuButton
            item={item}
            key={index}
            onClick={event => handleClick(event)}
          />
        ))}

        <HamburgerWrapper>
          <MenuButton
            item={{
              title: "",
              icon: "/images/Menu/burger_menu.svg",
              link: "/",
            }}
            onClick={event => handleClick(event)}
          />
        </HamburgerWrapper>
      </MenuWrapper>
      <MenuToolTip isOpen={isOpen} />
    </Wrapper>
  )
}

export default Header

const animation = keyframes`
  0%{
    opacity : 0;
    transform : translateY(-10px); blur(10px);
  }

  100%{
    opacity : 1;
    transform : translateY(0px); blur(0px);
  }

`

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  width: 100%;
  justify-content: space-between;
  padding: 0px 30px;
  align-items: center;
  z-index: 2;
  justify-content: right;

  @media (max-width: 768px) {
    top: 30px;
  }
  @media (max-width: 450px) {
    top: 20px;
    padding: 0 20px;
  }
`
const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  max-width: 900px;

  grid-template-columns: repeat(5, auto);
  position: relative;
  margin: 0 auto;

  > * {
    opacity: 0;
    animation: ${animation} 1s forwards;

    :nth-child(1) {
      animation-delay: 0.4s;
    }
    :nth-child(2) {
      animation-delay: 0.2s;
    }
    :nth-child(3) {
      animation-delay: 0s;
    }
    :nth-child(4) {
      animation-delay: 0.2s;
    }
    :nth-child(5) {
      animation-delay: 0.4s;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: auto;
    justify-content: right;

    > a {
      display: none;
    }
  }
`

const HamburgerWrapper = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`
