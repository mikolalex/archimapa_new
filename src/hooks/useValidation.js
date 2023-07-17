import { useState } from "react";

function useValidation(initialValue, func) {
  const [value, setValue] = useState(initialValue);
  const [value2, setValue2] = useState(initialValue);
  const [error, setError] = useState("");

  const validate = () => {
    setError(func(value, value2));
  };

  return [value, setValue, validate, error, value2, setValue2];
}

export default useValidation;
