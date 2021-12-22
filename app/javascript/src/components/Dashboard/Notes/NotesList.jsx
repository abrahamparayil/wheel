import React, { useState } from "react";

import Card from "components/Common/Card";

import { CARD_DATA } from "./constants";
import EditNotePane from "./Pane/EditNote";

export default function NotesList({ setShowDeleteAlert }) {
  const [isEditNotePaneOpen, setIsEditNotePaneOpen] = useState(false);
  return (
    <>
      <div className="m-4 w-full notes-table-height">
        {[1, 2, 3, 4].map(item => (
          <Card key={item} item={item}>
            <Card.Header label={CARD_DATA.headerLabel}>
              <Card.HeaderMenu>
                <Card.HeaderMenuItem label="Edit" />
                <Card.HeaderMenuItem
                  label="Delete"
                  onClick={() => setShowDeleteAlert(true)}
                />
              </Card.HeaderMenu>
            </Card.Header>
            <Card.Body>{CARD_DATA.bodyText}</Card.Body>
            <Card.Footer>{CARD_DATA.footerContent}</Card.Footer>
          </Card>
        ))}
      </div>
      <EditNotePane
        showPane={isEditNotePaneOpen}
        setShowPane={setIsEditNotePaneOpen}
      />
    </>
  );
}
