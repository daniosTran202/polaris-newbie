import { useState, useContext, useEffect, createContext } from "react";

import { Badge, Text } from "@shopify/polaris";
import axios from "axios";
const AppContext = createContext();
const AppProviderContext = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showSkeleton, setShowSkeleton] = useState(true);

  const client = axios.create({
    baseURL: "https://6294640ba7203b3ed067f742.mockapi.io/api/shopify/tasks",
  });

  useEffect(() => {
    setLoading(true);

    client.get("?page=1&limit=5").then((response) => {
      setTasks(response.data);
    });
  }, []);

  const timerFormatter = (timer) => {
    timer = new Date(timer).toDateString().split(" ");
    return timer[2] + " " + timer[1] + " " + timer[3];
  };

  let row = tasks.map((task) => [
    <Badge tone="info">{task.type}</Badge>,
    <Text as="strong">#{task.id}</Text>,
    <Text>
      <Text tone="success" fontWeight="bold">
        {task.title}
      </Text>
      <p
        style={{ width: "300px", textOverflow: "ellipsis", overflow: "hidden" }}
      >
        {task.description}
      </p>
    </Text>,
    task.status ? (
      <Badge progress="complete" tone="success">
        Active
      </Badge>
    ) : (
      <Badge progress="incomplete" tone="warning">
        Cancel
      </Badge>
    ),
    timerFormatter(task.first_deliverable),
    timerFormatter(task.closed),
  ]);

  useEffect(() => {
    setTimeout(() => {
      setShowSkeleton(!showSkeleton);
    }, 800);
  }, []);

  return (
    <AppContext.Provider
      value={{
        showSkeleton,
        row,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};
export { useGlobalContext, AppProviderContext, AppContext };
