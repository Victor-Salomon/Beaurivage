import executeQuery from "./db";

export default async function address({
  name,
  street,
  zipcode,
  description,
  heart,
  brunch,
  breakfast,
  snack,
  lunch_diner,
  ocean,
}) {
  const address = {
    name: name,
    street: street,
    zipcode: zipcode,
    description: description,
    heart: heart,
    brunch: brunch,
    breakfast: breakfast,
    snack: snack,
    lunch_diner: lunch_diner,
    ocean: ocean,
  };

  try {
    const newAddress = await executeQuery({
      query:
        "INSERT INTO address (name, street, zipcode, description, heart, brunch, breakfast, snack, lunch_diner, ocean) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      values: [
        address.name,
        address.street,
        address.zipcode,
        address.description,
        address.heart,
        address.brunch,
        address.breakfast,
        address.snack,
        address.lunch_diner,
        address.ocean,
      ],
    });
    console.log(newAddress);
  } catch (error) {
    console.log({ ...error });
  }

  return address;
}
