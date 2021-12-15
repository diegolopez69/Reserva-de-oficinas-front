export const getFormDataFromObj = (source) => {
  const formData = new FormData();
  Object.entries(source).forEach(([key, value]) => formData.append(key, value));

  return formData;
};
