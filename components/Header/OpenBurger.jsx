import styled from "styled-components";
import { GrFormClose } from "react-icons/gr";
import Link from "next/link";

const OpenBurger = ({ toggle }) => {
  return (
    <BurgerContainer>
      <CloseLogo onClick={toggle}>
        <GrFormClose style={{ fontSize: "2em", color: "#1b474a" }} />
      </CloseLogo>
      <ItemList>
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
      </ItemList>
    </BurgerContainer>
  );
};

const CloseLogo = styled.div`
  width: 100%;
  align-self: flex-end;
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
  margin-right: 5%;
  cursor: pointer;
`;

const BurgerContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ItemList = styled.ul`
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-left: 0px;
  margin: 0px;
`;
const LiMenuStyled = styled.li`
  color: #1b474a;
  text-decoration: none;
  list-style: none;
`;

export default OpenBurger;
