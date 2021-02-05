import db from "../../../src/db";

export default async function addressHandler(req, res) {
  try {
    if (req.method === "POST") {
      const newAddress = await db.address.create({
        data: {
          name: req.body.name,
          zipcode: req.body.zipcode,
          street: req.body.street,
          // city : req.body.city,
          description: req.body.description,
          // heart : req.body.heart,
          brunch: req.body.brunch,
          breakfast: req.body.breakfast,
          snack: req.body.snack,
          lunch_diner: req.body.lunch_diner,
          ocean: req.body.ocean,
        },
      });
      return res.status(201).json(newAddress);
    }
    if (req.method === "GET") {
      const address = await db.address.findMany();
      return res.status(200).json(address);
    }
    throw new Error("this method does not exist (yet ?)");
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
}
