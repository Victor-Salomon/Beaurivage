import Image from "next/image";
import styled from "styled-components";
import Background from "../components/Background";

export default function Home() {
  return (
    <div>
      <Background />
      <MainStyle>
        <Image
          src="/beaurivage1.png"
          alt="Picture of the author"
          width={500}
          height={300}
          style={{ marginTop: "100px" }}
        />
        <PStyledBG>
          Vous allez evidemment passer un bon séjour. On a même plus besoin de
          vous le souhaiter. Et comme d’habitude, vous ne vous êtes pas trompé
          puisque vous avez choisi de séjourner dans le formidable quartier{" "}
          <SpanStyled>Bibi Beaurivage</SpanStyled> : plage à perte de vue au
          bout de la rue, le mythique café
          <SpanStyled> Etxola Bibi</SpanStyled> à 100 mètres, les vagues de la
          côte des basques et sa <SpanStyled>Villa Belza</SpanStyled>, les
          Halles à 5 minutes, peut-être même des dauphins au sunset... Il ne
          faudra pas m’en vouloir si vous ne voulez plus partir.
        </PStyledBG>
      </MainStyle>
    </div>
  );
}

const MainStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10%;
  height: 80vh;
  @media (max-width: 768px) {
    height: 100vh;
  }
`;

const PStyledBG = styled.p`
  width: 70vw;
  text-align: justify;
  margin-top: 20%;
  margin: 5%;
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
