import styled from "styled-components";
import { IoIosHeartEmpty } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <UlFooterStyled>
        <MainLiFooterStyled>
          BIBI BEAURIVAGE
          <IoIosHeartEmpty
            style={{ fontSize: "1em", paddingTop: "5px", color: "#f2d0a4" }}
          />
        </MainLiFooterStyled>
        <LiFooterStyled>11 Rue Vaureal</LiFooterStyled>
        <LiFooterStyled>
          64200 <SpanFooterStyled>BIARRITZ</SpanFooterStyled>
        </LiFooterStyled>
        <CreditLiFooterStyled>C. 2021 VICTOR SALOMON </CreditLiFooterStyled>
      </UlFooterStyled>
    </div>
  );
};

const UlFooterStyled = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 0px;
`;

const MainLiFooterStyled = styled.li`
  padding-left: 10px;
  color: #f2d0a4;
  font-size: 15px;
  text-decoration: none;
  list-style: none;
  font-style: italic;
`;
const LiFooterStyled = styled.li`
  font-size: 10px;
  color: #f2d0a4;
  text-decoration: none;
  list-style: none;
`;
const CreditLiFooterStyled = styled.li`
  font-size: 7px;
  padding-top: 10px;
  color: #f2d0a4;
  text-decoration: none;
  list-style: none;
`;
const SpanFooterStyled = styled.span`
  font-style: italic;
`;

export default Footer;
