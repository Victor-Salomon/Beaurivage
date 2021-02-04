import db from "../../../src/db";
export default async function activitiesHandler(req, res) {
  try {
    if (req.method === "POST") {
      const newActivity = await db.activity.create({
        data: {
          activity_name: req.body.activity,
          description: req.body.description,
        },
      });
      return res.status(201).json(newActivity);
    }

    if (req.method === "GET") {
      const activities = await db.activity.findMany();
      return res.status(200).json(activities);
    }

    throw new Error("this method does not exist (yet ?)");
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
}
