import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import OpenBurger from "./OpenBurger";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && <OpenBurger toggle={toggle} />}
      <NavStyled>
        <div>
          <Link href="/">
            <LogoStyled>BEAURIVAGES</LogoStyled>
          </Link>
        </div>
        <div>
          <BurgerLogo onClick={toggle}>
            <Line></Line>
            <Line></Line>
            <Line></Line>
          </BurgerLogo>
          <UlMenuStyled>
            <Link href="/Appartment">
              <LiMenuStyled>L'APPARTEMENT</LiMenuStyled>
            </Link>
            <Link href="/Address">
              <LiMenuStyled>ADRESSES INCONTOURNABLES</LiMenuStyled>
            </Link>
            <Link href="/Activities">
              <LiMenuStyled>ACTIVITES</LiMenuStyled>
            </Link>
            <Link href="/Contact">
              <LiMenuStyled>CONTACT</LiMenuStyled>
            </Link>
          </UlMenuStyled>
        </div>
      </NavStyled>
    </>
  );
};

const NavStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 100vw;
  /* background-color: #f2d0a4; */
  @media (max-width: 768px) {
    /* position: unset; */
  }
`;
const LogoStyled = styled.a`
  cursor: pointer;
  font-family: "Pragati Narrow", sans-serif;
  font-size: 18px;
  color: #1b474a;
`;

const BurgerLogo = styled.div`
  width: 30px;
  height: 50px;
  cursor: pointer;
  margin-top: 30px;
  @media (min-width: 768px) {
    display: none;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  margin: 7px;
  border-radius: 5px;
  background-color: #1b474a;
`;

const UlMenuStyled = styled.ul`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
const LiMenuStyled = styled.li`
  text-decoration: none;
  list-style: none;
  padding: 20px;
  font-family: "Pragati Narrow", sans-serif;
  font-size: 18px;
  color: #1b474a;
  cursor: pointer;
  @media (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

export default Header;
