import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";
import OpenBurger from "./OpenBurger";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  //   useEffect(() => {
  //     if (isOpen) {
  //       document.body.style.overflow = "hidden";
  //     } else {
  //       document.body.style.overflow = "scroll";
  //     }
  //   }, [isOpen]);

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
  background-color: black;
`;

const NavStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 30px;
  margin-right: 30px;
  @media (max-width: 768px) {
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 30px;
  }
`;
const LogoStyled = styled.a`
  cursor: pointer;
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
  cursor: pointer;
  @media (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

export default Header;
