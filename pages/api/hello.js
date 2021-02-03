// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import executeQuery from "./db";

// export default (req, res) => {
//   res.status(200).json({ name: "John Doe" });
// };

// const activity = {
//   activity_name: activity_name,
//   description: description,
// };
export default async function getActivity({ activity_name, description }) {
  try {
    const result = await executeQuery({
      query: "SELECT * FROM activity WHERE activity_name = ?",
      values: [activity_name],
    });
    return result[0];
  } catch (error) {
    console.log(error);
  }
}
