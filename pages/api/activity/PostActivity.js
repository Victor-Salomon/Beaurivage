import executeQuery from "./db";

export default async function activity({ activity_name, description }) {
  const activity = {
    activity_name: activity_name,
    description: description,
  };

  try {
    const newActivity = await executeQuery({
      query: "INSERT INTO address (activity_name, description) VALUES(?, ?)",
      values: [activity.activity_name, activity.description],
    });
    console.log(newActivity);
  } catch (error) {
    console.log({ ...error });
  }

  return activity;
}
