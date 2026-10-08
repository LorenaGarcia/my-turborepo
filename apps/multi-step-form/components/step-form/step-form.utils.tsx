import * as Yup from "yup";

function getSchema() {
  const schema = Yup.object().shape({
    name: Yup.string().required("This field is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("This field is required"),
    phone: Yup.string()
      .matches(/^\+?[0-9\s]+$/, "Invalid phone number")
      .required("This field is required"),
  });

  return schema;
}

export { getSchema };
