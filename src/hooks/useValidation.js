import { useState } from "react";

function useValidation(initialValue, checkingFunction) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");

  const validate = () => {
    const errorValue = checkingFunction(value);
    setError(errorValue);
    return errorValue ? false : true;
  };

  return [value, setValue, validate, error, setError];
}

export default useValidation;
