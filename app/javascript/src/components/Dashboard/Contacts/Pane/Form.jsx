import React, { useState } from "react";

import { Formik, Form } from "formik";
import { Button, Pane, Toastr } from "neetoui/v2";
import { Input, Select } from "neetoui/v2/formik";

import formValidationSchemas from "constants/formValidationSchemas";

import { SELECT_OPTIONS } from "./constants";

export default function ContactForm({ isEdit, contact, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    onClose();
    Toastr.success("Contact was successfully created.");
  };

  return (
    <Formik
      initialValues={contact}
      onSubmit={handleSubmit}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={formValidationSchemas.contactsForm}
    >
      {({ isSubmitting, handleSubmit }) => {
        return (
          <Form className="w-full">
            <Pane.Body closeOnEsc size="lg" className="space-y-6">
              <div className="flex space-x-4">
                <Input
                  label="First Name"
                  name="firstName"
                  className="flex-grow-0 w-full"
                  required
                />
                <Input
                  label="Last Name"
                  name="lastName"
                  className="flex-grow-0 w-full"
                  required
                />
              </div>
              <Input
                label="Email Address"
                name="emailAddress"
                className="flex-grow-0 w-full"
                required
              />
              <Select
                name="role"
                label="role"
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
                  setSubmitted(true);
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
        );
      }}
    </Formik>
  );
}
