import axios from "axios";
import { useState } from "react";

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
    <>
      <h1>Hi Boss, any new address or activity to advice in Biarritz area ?</h1>

      <h2>Come on! Share your favorite spots 🤯</h2>
      <form onSubmit={handleAddressSubmit}>
        <label>Adress Name :</label>
        <input
          type="text"
          value={addressName}
          onChange={(e) => setAddressName(e.target.value)}
        />
        <label>Adress street :</label>
        <input
          type="text"
          value={addressStreet}
          onChange={(e) => setAddressStreet(e.target.value)}
        />
        <label>Adress ZipCode :</label>
        <input
          type="text"
          value={addressZipcode}
          onChange={(e) => setAddressZipcode(+e.target.value)}
        />
        <label>Adress Description :</label>
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

      <h2>Let us know your secret! What's your favorite activities ✊</h2>
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
    </>
  );
};

export default Forms;
