import { ChangeEvent, FunctionComponent } from "react";
import { FormGroup, FormLabel, FormSelect } from "react-bootstrap";

interface IFormSelectProps {
  id: string;
  labelName: string;
  onChange: {
    (e: ChangeEvent<any>): void;
    <T_1 = string | ChangeEvent<any>>(field: T_1): T_1 extends ChangeEvent<any>
      ? void
      : (e: string | ChangeEvent<any>) => void;
  };
  value?: string;
  option: Object;
}

export const FormControlSelect: FunctionComponent<IFormSelectProps> = ({
  id,
  onChange,
  value,
  option,
  labelName,
}) => {
  return (
    <>
      <FormGroup className="mb-3 form-group">
        <FormLabel htmlFor={id}>
          <strong>{labelName}</strong>
        </FormLabel>
        <FormSelect
          className="form-control"
          id={id}
          name={id}
          onChange={onChange}
          value={value}
        >
          {option}
        </FormSelect>
      </FormGroup>
    </>
  );
};
