import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Address = ({ address }) => {
  const [newAddressList, setNewAddressList] = useState([]);
  const [currentChoice, setCurrentChoice] = useState("");
  const [toggleAddress, setToggleAddress] = useState(false);

  const handleToggle = () => {
    setToggleAddress(!toggleAddress);
  };

  useEffect(() => {
    const filtredAdress = address.filter((a) => a[currentChoice]);
    setNewAddressList(filtredAdress);
  }, [currentChoice]);

  return (
    <MainStyleAddress>
      <LeftDivAddress>
        <BgWrapAddress>
          <Image
            alt="Location appartement bibi beaurivage"
            src="/sunset.jpeg"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </BgWrapAddress>
        <LeftDivText>
          <H1StyledAddress>
            <Span1>MANGER, SURFER, DROMIR,</Span1> <br />
            <Span2>MANGER, SURFER, MANGER,</Span2> <br />
            <Span3>MANGER,DORMIR,MANGER, </Span3>
            <br />
            <Span4>MANGER, </Span4>
            <Span5>MANGER, MANGER...</Span5>
            <br />
          </H1StyledAddress>
          <PStyledAddress>
            Ah la gastronomie au Pays-Basque ; Axoa, Txulette, Xistorra, Muxu,
            Gateau Basque, Méture, Chipirons, Padrón, Taloa, Ossau Iraty,
            Patxaran, Brana, Rioja (...). Biarritz et ses alentours regorgent de
            bonnes adresses. Capitale Française du chocolat, vins d’exception,
            restaurants étoilés, slow food, raw food, locavore, vins natures,
            biodynamie, végétarien, inspiration indonésienne et surf culture des
            ceviches et bowls; <Span6>le food coma n’est pas loin, </Span6>mais
            tout le monde y trouvera son compte.. & pour les inarrêtables, la
            nuit n’en finira plus.
          </PStyledAddress>
        </LeftDivText>
      </LeftDivAddress>
      <RightDivAddress>
        <H2StyledAddress> MES BONNES ADDRESSES</H2StyledAddress>
        <div>
          <button
            onClick={() => {
              setCurrentChoice("brunch");
              handleToggle();
            }}
          >
            Bruncher
          </button>
          <button
            onClick={() => {
              setCurrentChoice("breakfast");
              handleToggle();
            }}
          >
            Petit Dejeuner
          </button>
          <button
            onClick={() => {
              setCurrentChoice("lunch_diner");
              handleToggle();
            }}
          >
            Dejeuner
          </button>
          <button
            onClick={() => {
              setCurrentChoice("snack");
              handleToggle();
            }}
          >
            Gouter
          </button>
          <button
            onClick={() => {
              setCurrentChoice("lunch_diner");
              handleToggle();
            }}
          >
            Diner
          </button>
          <button
            onClick={() => {
              setCurrentChoice("ocean");
              handleToggle();
            }}
          >
            Avec Vue Océan
          </button>
        </div>
        {/* short circuit operator */}
        {handleToggle && (
          <ul>
            {newAddressList.map((a) => {
              return (
                <>
                  <li key={a.id}>
                    {a.name} {a.street} {a.zipcode} {a.description}
                  </li>
                </>
              );
            })}
          </ul>
        )}
      </RightDivAddress>
    </MainStyleAddress>
  );
};

export default Address;

export async function getServerSideProps(context) {
  try {
    const address = await axios.get("http://localhost:3000/api/address");
    return {
      props: {
        address: address.data,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        error: error.data,
      },
    };
  }
}

const MainStyleAddress = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const LeftDivAddress = styled.div`
  width: 50vw;
  height: 75vh;
`;

const LeftDivText = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightDivAddress = styled.div`
  width: 50vw;
  height: 75vh;
`;

const Span1 = styled.span`
  color: #f2d0a4;
  font-family: "Pragati Narrow", sans-serif;
  font-size: 40px;
`;
const Span2 = styled.span`
  color: #f2d0a4;
  font-family: "Pragati Narrow", sans-serif;
  font-size: 35px;
`;
const Span3 = styled.span`
  color: #f2d0a4;
  font-family: "Pragati Narrow", sans-serif;
  font-size: 30px;
`;
const Span4 = styled.span`
  color: #f2d0a4;
  font-family: "Pragati Narrow", sans-serif;
  font-size: 25px;
`;
const Span5 = styled.span`
  color: #f2d0a4;
  font-family: "Pragati Narrow", sans-serif;
  font-size: 20px;
`;
const Span6 = styled.span`
  color: #f2d0a4;
  font-family: "Pragati Narrow", sans-serif;
  font-size: 17px;
  font-style: italic;
`;

const BgWrapAddress = styled.div`
  position: fixed;
  height: 100vh;
  width: 50vw;
  overflow: hidden;
  z-index: -1;
`;

const H1StyledAddress = styled.h1`
  padding-left: 20px;
  padding-right: 20px;
  text-align: justify;
  @media (max-width: 768px) {
    padding: 10%;
  }
`;

const H2StyledAddress = styled.h2`
  text-align: center;
  color: #1b474a;
  font-family: "Pragati Narrow", sans-serif;
  font-size: 40px;
  @media (max-width: 768px) {
    padding: 10%;
  }
`;

{
  /* <div key={add.id}>
{add.name}
<p>Adresse : </p>
{add.street}
{add.zipcode}
{add.description}
</div> */
}

const PStyledAddress = styled.p`
  padding-top: 50px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: justify;
  color: white;
  font-family: "Pragati Narrow", sans-serif;
  font-size: 17px;

  @media (max-width: 768px) {
    padding: 10%;
  }
`;
