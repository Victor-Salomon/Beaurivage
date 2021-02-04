import axios from "axios";

const Address = ({ address }) => {
  return (
    <>
      <h1> MES BONNES ADDRESSES</h1>

      <div>
        {address.map((add) => {
          return (
            <div key={add.id}>
              {add.name}
              <p>Adresse : </p>
              {add.street}
              {add.zipcode}
              {add.description}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Address;

export async function getServerSideProps(context) {
  const address = await axios.get("http://localhost:3000/api/address");
  return {
    props: {
      address: address.data,
    }, // will be passed to the page component as props
  };
}
