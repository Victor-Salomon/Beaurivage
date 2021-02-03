import styled from "styled-components";
import { GrFormClose } from "react-icons/gr";
import Link from "next/link";

const OpenBurger = ({ toggle }) => {
  return (
    <BurgerContainer>
      <CloseLogo onClick={toggle}>
        <GrFormClose style={{ fontSize: "2em" }} />
      </CloseLogo>
      <ItemList>
        <Link href="/Appartment">
          <a>L'APPARTEMENT</a>
        </Link>
        <Link href="/Address">
          <a>ADRESSES INCONTOURNABLES</a>
        </Link>
        <Link href="/Activities">
          <a>ACTIVITES</a>
        </Link>
        <Link href="/Contact">
          <a>CONTACT</a>
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

export default OpenBurger;
