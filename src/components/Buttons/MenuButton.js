import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

export const MenuButton = props => {
  const { item } = props
  return (
    <Link to={item.link} onClick={props.onClick}>
      <MenuItem>
        <img src={item.icon} alt={item.title} />
        {item.title}
      </MenuItem>
    </Link>
  )
}

const MenuItem = styled.div`
  color: black;
  display: grid;
  grid-template-columns: 24px auto;
  gap: 10px;
  align-items: center;
  padding: 10px;
  transition: 0.5s ease-out;
  border-radius: 10px;
  justify-content: center;

  @media (max-width: 768px) {
    top: 30px;
    justify-content: left;
  }

  :hover {
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    transform: translateY(-5px);
  }
`
