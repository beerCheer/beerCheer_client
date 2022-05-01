import { Label, Input, ErrorMessage } from './styled';

interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label: string;
  value?: string;
  id: string;
  handleOnChange?: (newValue: string) => void;
  errorMessage?: boolean | string;
  disabled?: boolean;
  placeholder?: string;
}

const TextInput = ({ label, value = '', handleOnChange, id, errorMessage, ...props }: TextInputProps) => {
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!handleOnChange) return;

    const newValue = event.target.value;
    handleOnChange(newValue);
  };
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} value={value} onChange={onChangeHandler} {...props} />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};

export default TextInput;
