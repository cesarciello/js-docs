import styled from "styled-components"
import { Link } from "gatsby"

export const ContainerMenu = styled.aside`
  top: 0;
  bottom: 0;
  position: fixed;
  z-index: 20;
  background: #282c35;
  left: 55px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border-right: 2px solid #ff9900;

  & a {
    text-decoration: none;
    width: 100%;
    display: flex;
    justify-content: center;
    letter-spacing: 0.1em;
    text-decoration: none;
    margin-bottom: 10px;
  }

  transition: all 0.2s ease-in-out;

  &.opened {
    transform: translateX(0%);
  }
  &.closed {
    transform: translateX(-100%);
  }

  @media screen and (max-width: 438px) {
    top: 64px;
    left: 0;
    right: 0;
    border: none;
  }
`

export const ContentMenu = styled.div`
  overflow-y: scroll;
  flex: 1;
`
export const MenuHamburgerWrapper = styled.div`
  width: 64px;
  height: 100%;
  @media (max-width: 438px) {
    width: 100%;
    height: 64px;
  }
`

export const ContainerHamburguer = styled.header`
  border-right: 2px solid rgba(255, 255, 255, 0.28);

  background-color: #282c35;
  width: 64px;

  display: flex;
  justify-content: center;

  z-index: 30;

  position: fixed;
  top: 0;
  left: 0;

  height: 100%;

  padding: 1rem 6px;

  @media (max-width: 438px) {
    height: 64px;
    width: 100%;
    justify-content: start;
    align-items: center;
    padding: 6px 1rem;
    border-bottom: 2px solid #314366;
    border-right: none;
  }
`
export const Hamburger = styled.div`
  width: 35px;
  height: 35px;
  cursor: pointer;
  position: relative;

  &::after,
  &::before {
    width: 100%;
    transition: all 0.2s ease-in-out;
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    left: 50%;
    background: #64676d;
  }

  &.opened {
    &::after,
    &::before {
      top: 50%;
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
  &.closed {
    &::after,
    &::before {
      transform: translate(-50%, -50%);
    }
    &::after {
      top: 5%;
    }
    &::before {
      top: 95%;
    }
  }
`

export const HamburgerLine = styled.div`
  background: white;

  position: absolute;

  width: 65%;
  height: 2px;

  left: 50%;
  top: 50%;

  transition: all 0.2s ease-in-out;

  background: #64676d;
  &.opened {
    transform: translate(100%, 50%);
    opacity: 0;
    visibility: hidden;
  }
  &.closed {
    transform: translate(-50%, -50%);
    opacity: 1;
    visibility: visible;
  }
`

export const ContainerLink = styled.div`
  text-align: center;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  @media (max-width: 438px) {
    flex-direction: column;
  }
`

export const ContainerContent = styled.div``

export const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  padding: 6px;
  white-space: nowrap;
  display: block;

  &:active {
    color: gray;
  }

  &:hover {
    color: #ff9900;
  }
`

export const Title = styled.p`
  display: block;
  padding: 1rem 2rem;
  font-weight: bold;
  font-size: 18px;
  color: #ff9900;
  text-align: center;
`
