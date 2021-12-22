import * as Yup from "yup";

export const SELECT_OPTIONS = [
  {
    label: "Getting Started",
    id: "gettingStarted",
  },
  {
    label: "Onboarding",
    id: "onboarding",
  },
  {
    label: "User Flow",
    id: "userFlow",
  },
  {
    label: "UX",
    id: "ux",
  },
  {
    label: "Bugs",
    id: "bugs",
  },
  {
    label: "V2",
    id: "v2",
  },
];

export const VALIDATION_SCHEMA = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  emailAddress: Yup.string().email().required("Email is required"),
  role: Yup.object().required("Email is required"),
});

export const INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  emailAddress: "",
  role: { label: "", value: "" },
};
