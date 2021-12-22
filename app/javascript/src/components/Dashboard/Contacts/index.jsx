import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Plus } from "neetoicons";
import { Button, PageLoader } from "neetoui/v2";
import { Header } from "neetoui/v2/layouts";

import notesApi from "apis/notes";
import EmptyState from "components/Common/EmptyState";

import ContactTable from "./ContactTable";
import NewContactPane from "./CreateContact";
import DeleteAlert from "./DeleteAlert";
import Filter from "./Filter";

const Contacts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isNewNotePaneOpen, setIsNewNotePaneOpen] = useState(false);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [isMenuBarOpen, setIsMenuBarOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNoteIds, setSelectedNoteIds] = useState([]);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setIsLoading(true);
      const { data } = await notesApi.fetch();
      setNotes(data.notes);
    } catch (error) {
      logger.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className="flex w-11/12">
      <div>
        <Filter showMenu={isMenuBarOpen} />
      </div>
      <div className="flex flex-col p-4">
        <Header
          title="All Contacts"
          menuBarToggle={() => setIsMenuBarOpen(!isMenuBarOpen)}
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
            placeholder: "Search Name, Email, Phone Number, Ect.",
          }}
          actionBlock={
            <Button
              onClick={() => setIsNewNotePaneOpen(true)}
              label="Add Contact"
              icon={Plus}
            />
          }
        />
        {notes.length ? (
          <ContactTable setShowDeleteAlert={setIsDeleteAlertOpen} />
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            title="Looks like you don't have any notes!"
            subtitle="Add your notes to send customized emails to them."
            primaryAction={() => setIsNewNotePaneOpen(true)}
            primaryActionLabel="Add New Note"
          />
        )}
        <NewContactPane
          showPane={isNewNotePaneOpen}
          setShowPane={setIsNewNotePaneOpen}
          fetchNotes={fetchNotes}
        />
        {isDeleteAlertOpen && (
          <DeleteAlert
            selectedNoteIds={selectedNoteIds}
            onClose={() => setIsDeleteAlertOpen(false)}
            refetch={fetchNotes}
            setSelectedNoteIds={setSelectedNoteIds}
          />
        )}
      </div>
    </div>
  );
};

export default Contacts;
