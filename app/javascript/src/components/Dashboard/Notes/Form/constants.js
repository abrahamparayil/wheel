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
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
});

export const INITIAL_VALUES = {
  title: "",
  description: "",
};
