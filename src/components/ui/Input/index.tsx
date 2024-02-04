import { ChangeEvent } from 'react';
import { InputContainer, Input, Label, LabelText, InputError, InputErrorText } from './style';

interface InputProps {
  label: string;
  id: string;
  error?: any;
  type: string;
  value: string;
  name?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
}

const InputComponent: React.FC<InputProps> = ({ label, id, error, ...props }) => {
  console.log(props.value);

  return (
    <InputContainer>
      <Input
        {...props}
        id={id}
        required
      />
      <Label htmlFor={id}>
        <LabelText>{label}</LabelText>
      </Label>
      <InputError>{error && <InputErrorText>{error}</InputErrorText>}</InputError>
    </InputContainer>
  );
};

export default InputComponent;

{
  /* <div class="input-contain">
  <input type="text" id="fname" name="fname" autocomplete="off" value="" aria-labelledby="placeholder-fname">
  <label class="placeholder-text" for="fname" id="placeholder-fname">
     <div class="text">First Name</div>
  </label>
</div> */
}
