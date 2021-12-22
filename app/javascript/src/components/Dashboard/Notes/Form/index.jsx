import React, { useState } from "react";

import { Formik, Form } from "formik";
import { Button, Pane } from "neetoui/v2";
import { Input, Select } from "neetoui/v2/formik";

import notesApi from "apis/notes";

import { SELECT_OPTIONS, VALIDATION_SCHEMA, INITIAL_VALUES } from "./constants";

export default function NoteForm({ onClose, refetch, note, isEdit }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = async values => {
    try {
      setIsSubmitted(true);
      if (isEdit) {
        await notesApi.update(note.id, values);
      } else {
        await notesApi.create(values);
      }
      refetch();
      onClose();
    } catch (err) {
      logger.error(err);
    }
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validateOnBlur={isSubmitted}
      validateOnChange={isSubmitted}
      validationSchema={VALIDATION_SCHEMA}
    >
      {({ isSubmitting, handleSubmit }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-6">
            <Input label="Title" name="title" className="flex-grow-0 w-full" />
            <Input
              label="Description"
              name="description"
              className="flex-grow-0 w-full"
            />
            <Select
              name="asignedContact"
              label="Assigned Contact"
              options={SELECT_OPTIONS}
              placeholder="Select role"
              className="flex-grow-0 w-full"
            />
            <Select
              name="tags"
              label="Tags"
              options={SELECT_OPTIONS}
              placeholder="Select role"
              className="flex-grow-0 w-full"
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              type="submit"
              label={isEdit ? "Update" : "Save Changes"}
              size="large"
              style="primary"
              className="mr-3"
              disabled={isSubmitting}
              loading={isSubmitting}
              onClick={e => {
                e.preventDefault();
                setIsSubmitted(true);
                handleSubmit();
              }}
            />
            <Button
              onClick={onClose}
              label="Cancel"
              size="large"
              style="text"
            />
          </Pane.Footer>
        </Form>
      )}
    </Formik>
  );
}
