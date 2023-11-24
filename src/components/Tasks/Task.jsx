import { Page, DataTable, Card, Badge, Text } from "@shopify/polaris";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SubmitSection from "./SubmitSection";

const client = axios.create({
  baseURL: "https://6294640ba7203b3ed067f742.mockapi.io/api/shopify/tasks",
});

function TaskListAPI() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
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

  return (
    <Page title="Recent Tasks">
      <Card>
        <DataTable
          columnContentTypes={["text", "text", "text", "text", "text", "text"]}
          headings={[
            "Type",
            "Task ID",
            "Task Name",
            "Status",
            "Deliverable",
            "Closed",
          ]}
          rows={row}
        />
      </Card>
    </Page>
  );
}

export default TaskListAPI;
