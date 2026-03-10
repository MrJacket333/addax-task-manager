import React from 'react';
import { InputComponent, Label } from "./TextInput.styles";
import type { TextInputProps } from "./TextInput.types";

export const TextInput = ({ ref, name, label, placeholder }: TextInputProps) => {
  return <React.Fragment>
    {label && <Label htmlFor={name}>{label}</Label>}
    <InputComponent ref={ref} name={name} type="text" placeholder={placeholder} />
  </React.Fragment>;
}