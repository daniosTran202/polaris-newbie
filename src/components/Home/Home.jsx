import React from "react";
import SubmitSection from "../Tasks/SubmitSection";
import TaskListAPI from "../Tasks/Task";
import { useGlobalContext } from "../../context/context";
import HomeSkeletonExample from "./SkeletonExample";
function Home() {
  return (
    <>
      <SubmitSection />
      <TaskListAPI />
    </>
  );
}

export default Home;
