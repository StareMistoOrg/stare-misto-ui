import { ChangeEvent, useState } from 'react';

export const useInput = (defaultValue: string, validationFn: (value: string) => boolean) => {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFn(enteredValue);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(event.target.value);

    setDidEdit(false);
  };

  const handleInputBlur = () => {
    setDidEdit(true);
  };

  return {
    value: enteredValue,
    handleInputBlur,
    handleInputChange,
    hasError: didEdit && !valueIsValid,
  };
};
