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
  </div>
);

export default Background;

const BgWrap = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
  /* overflow: hidden; */
  z-index: -1;
  @media (max-width: 768px) {
  }
`;
