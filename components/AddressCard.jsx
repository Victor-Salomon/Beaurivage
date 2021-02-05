import { useEffect, useState } from "react";
import styled from "styled-components";

const AddressCard = ({ address }) => {
  const [newAddressList, setNewAddressList] = useState([]);
  const [currentChoice, setCurrentChoice] = useState("snack");

  useEffect(() => {
    const filtredAdress = address.filter((a) => a[currentChoice]);
    setNewAddressList(filtredAdress);
  }, [currentChoice]);

  return (
    <>
      {/* {name.map((n) => {
        <li>
          {n.name}, {n.street}, {n.description}
        </li>;
      })} */}
    </>
  );
};

export default AddressCard;
