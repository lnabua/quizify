import { useEffect } from "react";
import api from "../lib/axios";

const Home = () => {
  // Testing frontend/backend connection
  useEffect(() => {
    api
      .get("/quiz")
      .then((res) => {
        console.log("Response from backend:", res.data);
      })
      .catch((err) => {
        console.error("Error connecting to backend:", err);
      });
  }, []);

  return <div>Home</div>;
};

export default Home;
