import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

const Forms = () => {
  const [activity, setActivity] = useState("");
  const [description, setDescription] = useState("");

  const [addressName, setAddressName] = useState("");
  const [addressStreet, setAddressStreet] = useState("");
  const [addressZipcode, setAddressZipcode] = useState("");
  const [addressDescription, setAddressDescription] = useState("");
  const [brunchChecked, setBrunchChecked] = useState(false);
  const [breakfastChecked, setBreakfastChecked] = useState(false);
  const [snackChecked, setSnackChecked] = useState(false);
  const [lunchChecked, setLunchChecked] = useState(false);
  const [oceanChecked, setOceanChecked] = useState(false);

  const handleActivitySubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/activities", {
      activity,
      description,
    });
  };

  const handleAddressSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/address", {
      name: addressName,
      zipcode: addressZipcode,
      street: addressStreet,
      // city,
      description: addressDescription,
      //   heart,
      brunch: brunchChecked,
      breakfast: breakfastChecked,
      snack: snackChecked,
      lunch_diner: lunchChecked,
      ocean: oceanChecked,
    });
  };
  return (
    <MainStyleBo>
      <div>
        <H1Bo>
          Hi Boss, any new address or activity to advice in Biarritz area ?
        </H1Bo>
        <StyleBoAdd>
          <H2Bo>Come on! Share your favorite spots 🤯</H2Bo>
          <StyleBoAddForm1>
            <form onSubmit={handleAddressSubmit}>
              <label>Address Name :</label>
              <input
                type="text"
                value={addressName}
                onChange={(e) => setAddressName(e.target.value)}
              />
              <label>Address street :</label>
              <input
                type="text"
                value={addressStreet}
                onChange={(e) => setAddressStreet(e.target.value)}
              />
              <label>Address ZipCode :</label>
              <input
                type="text"
                value={addressZipcode}
                onChange={(e) => setAddressZipcode(+e.target.value)}
              />
              <label>Address Description :</label>
              <textarea
                value={addressDescription}
                onChange={(e) => setAddressDescription(e.target.value)}
              />
              <label>Brunch :</label>
              <input
                type="checkbox"
                checked={brunchChecked}
                onChange={(e) => setBrunchChecked(e.target.checked)}
              />
              <label>Breakfast :</label>
              <input
                type="checkbox"
                checked={breakfastChecked}
                onChange={(e) => setBreakfastChecked(e.target.checked)}
              />
              <label>Snack :</label>
              <input
                type="checkbox"
                checked={snackChecked}
                onChange={(e) => setSnackChecked(e.target.checked)}
              />
              <label>Lunch/Diner :</label>
              <input
                type="checkbox"
                checked={lunchChecked}
                onChange={(e) => setLunchChecked(e.target.checked)}
              />
              <label>Ocean View:</label>
              <input
                type="checkbox"
                checked={oceanChecked}
                onChange={(e) => setOceanChecked(e.target.checked)}
              />

              <button type="submit"> Send a new address</button>
            </form>
          </StyleBoAddForm1>
        </StyleBoAdd>
      </div>
      <div>
        <H2Bo>Let us know your secret! What's your favorite activities ✊</H2Bo>
        <form onSubmit={handleActivitySubmit}>
          <label>Activity Name :</label>
          <input
            type="text"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
          />
          <label>Activity Description :</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit"> Send a new activity</button>
        </form>
      </div>
    </MainStyleBo>
  );
};

const MainStyleBo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5%;
  /* @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  } */
`;
const StyleBoAdd = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5%;
  /* @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  } */
`;
const StyleBoAddForm1 = styled.div`
  flex-direction: column;
  align-items: center;
  /* @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  } */
`;

const H1Bo = styled.h1`
  font-family: "Pragati Narrow", sans-serif;
  font-size: 50px;
  color: #1b474a;
  text-align: center;
  /* @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  } */
`;
const H2Bo = styled.h2`
  font-family: "Pragati Narrow", sans-serif;
  font-size: 35px;
  color: #1b474a;
  text-align: center;
  /* @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  } */
`;

export default Forms;
