import axios from "axios";

const Activities = ({ activities }) => {
  return (
    <>
      <div>
        {activities.map((act) => {
          return (
            <div key={act.id}>
              <h1>{act.activity_name}</h1>
              <p>{act.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Activities;

export async function getServerSideProps(context) {
  const activities = await axios.get("http://localhost:3000/api/activities");
  return {
    props: {
      activities: activities.data,
    }, // will be passed to the page component as props
  };
}
