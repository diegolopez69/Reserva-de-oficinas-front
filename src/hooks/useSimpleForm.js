import { useState } from "react";

export const useSimpleForm = (formShape) => {
  const [state, setState] = useState(formShape);
  const onChange = ({
    target: { name, value, type, checked, files, multiple },
  }) => {
    let nextValue = type === "checkbox" ? checked : value;
    if (type === "file") {
      nextValue = multiple ? files : files[0];
    }

    setState((prevState) => ({ ...prevState, [name]: nextValue }));
  };

  const hardSetValues = (incomingValues) => {
    setState((prevState) => ({ ...prevState, ...incomingValues }));
  };

  return { values: state, onChange, hardSetValues };
};
