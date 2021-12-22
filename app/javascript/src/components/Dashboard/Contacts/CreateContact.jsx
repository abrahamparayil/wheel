import React from "react";

import { Pane, Typography } from "neetoui/v2";

import Form from "./Form";

export default function NewContactPane({
  fetchContacts,
  showPane,
  setShowPane,
}) {
  const onClose = () => setShowPane(false);
  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Add New Contact
        </Typography>
      </Pane.Header>
      <Form onClose={onClose} refetch={fetchContacts} isEdit={false} />
    </Pane>
  );
}
