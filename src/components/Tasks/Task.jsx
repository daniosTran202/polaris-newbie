import { Page, DataTable, Card, Badge, Text } from "@shopify/polaris";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useGlobalContext } from "../../context/context";

function TaskListAPI() {
  const { row } = useGlobalContext();
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
