import { ChangeEvent, FunctionComponent } from "react";

interface IInputProps {
  type: string;
  placeholder: string;
  id?: string;
  name?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  className?: string;
  maxLength: number;
}

export const InputBlock: FunctionComponent<IInputProps> = ({
  type,
  placeholder,
  id,
  name,
  onChange,
  value,
  className,
  maxLength,
}) => {
  return (
    <input
      id={id}
      name={name}
      onChange={onChange}
      value={value}
      className={className}
      type={type}
      aria-label="Small"
      aria-describedby="inputGroup-sizing-sm"
      placeholder={placeholder}
      maxLength={maxLength}
    />
  );
};
