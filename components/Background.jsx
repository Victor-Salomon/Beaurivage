import Image from "next/image";
import styled from "styled-components";
// import { bgWrap, bgText } from "../Home.module.css";

const Background = () => (
  <div>
    <BgWrap>
      <Image
        alt="Location appartement bibi beaurivage"
        src="/ocean.jpeg"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </BgWrap>
    <MainStyle>
      <Image
        src="/beaurivage1.png"
        alt="Picture of the author"
        width={500}
        height={300}
        style={{ margin: "50px" }}
      />
      <PStyledBG>
        Vous allez evidemment passer un bon séjour. On a même plus besoin de
        vous le souhaiter. Et comme d’habitude, vous ne vous êtes pas trompé
        puisque vous avez choisi de séjourner dans le formidable quartier{" "}
        <SpanStyled>Bibi Beaurivage</SpanStyled> : plage à perte de vue au bout
        de la rue, le mythique café
        <SpanStyled> Etxola Bibi</SpanStyled> à 100 mètres, les vagues de la
        côte des basques et sa <SpanStyled>Villa Belza</SpanStyled>, les Halles
        à 5 minutes, peut-être même des dauphins au sunset... Il ne faudra pas
        m’en vouloir si vous ne voulez plus partir.
      </PStyledBG>
    </MainStyle>
  </div>
);

export default Background;

const MainStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BgWrap = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: -1;
`;

const PStyledBG = styled.p`
  /* margin: 0;
  font-size: 2rem;
  line-height: 3rem;
  text-align: center;*/
  text-align: justify;
  padding: 5% 19%;
  color: white;
  font-family: "Pragati Narrow", sans-serif;
  font-size: 17px;

  @media (max-width: 768px) {
    padding: 10%;
  }
`;

const SpanStyled = styled.span`
  font-style: italic;
  color: #f2d0a4;
`;
