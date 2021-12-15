const defaultFormShape = {
  name: "",
  lastname: "",
  phoneNumber: "",
  email: "",
  address: "",
  phonePrefix: "",
  city: "",
  zipCode: "",
  birthdate: "",
  password: "",
  passwordConfirm: "",
  language: "",
  age: "",
  avatar: "",
  bankName: "",
  bankAccount: "",
  swift: "",
};

export const extractUserFields = (user, formShape = defaultFormShape) =>
  Object.keys(formShape).reduce((acc, key) => {
    acc[key] = user[key] || "";
    return acc;
  }, {});
