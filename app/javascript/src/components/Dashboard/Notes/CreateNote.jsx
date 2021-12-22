import React from "react";

import { Pane, Typography } from "neetoui/v2";

import Form from "./Form";
import { INITIAL_VALUES } from "./Form/constants";

export default function NewNotePane({ fetchNotes, showPane, setShowPane }) {
  const onClose = () => setShowPane(false);
  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Create a New Note
        </Typography>
      </Pane.Header>
      <Form
        onClose={onClose}
        refetch={fetchNotes}
        note={INITIAL_VALUES}
        isEdit={false}
      />
    </Pane>
  );
}
