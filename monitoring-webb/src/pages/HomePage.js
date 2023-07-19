import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import ProjectsPage from "./ProjectsPage";

function HomePage() {
  const [donation, setDonation] = useState({ user: 0, amount: 0 });
  useEffect(() => {
    const source = new EventSource(`http://localhost:4000/dashboara`);

    source.addEventListener("open", () => {
      console.log("SSE opened!");
    });
    source.onmessage = (event) => {
      console.log(event);
    };

    source.addEventListener("message", (e) => {
      console.log(e);
      console.log(e.data);
      const data = JSON.parse(e.data);

      setDonation(data);
    });

    source.addEventListener("error", (e) => {
      console.error("Error: ", e);
    });
    source.onerror = () => {
      // error log here
      // after logging, close the connection
      source.close();
    };

    return () => {
      source.close();
    };
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar />
      <ProjectsPage />
    </div>
  );
}

export default HomePage;
