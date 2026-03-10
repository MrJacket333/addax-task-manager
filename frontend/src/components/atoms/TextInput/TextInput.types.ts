import React from 'react';

export type TextInputProps = {
  ref?: React.Ref<HTMLInputElement>;
  name: string;
  label?: string;
  placeholder?: string;
};
