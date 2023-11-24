import React from "react";
import SubmitSection from "../Tasks/SubmitSection";
import TaskListAPI from "../Tasks/Task";

function Home() {
  return (
    <>
      <SubmitSection />
      <TaskListAPI />
    </>
  );
}

export default Home;
