import { InputAdornment, TextField } from "@material-ui/core";
import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import "./InputComponent.css";

interface IInputComponent {
  fieldId: string;
  placeholderText: string;
  inputAdornment: string;
  handleChange(value: string): void;
}

const InputComponent = ({
  placeholderText,
  fieldId,
  inputAdornment,
  handleChange,
}: IInputComponent) => {
  return (
    <div className="inputContainer">
      <TextField
        id={fieldId}
        label={placeholderText}
        onChange={(e): any => handleChange(e.target.value)}
        fullWidth
        // InputProps={{
        //   endAdornment: (
        //     <InputAdornment position="end">{inputAdornment}</InputAdornment>
        //   ),
        // }}
      />
    </div>
  );
};

export default InputComponent;
