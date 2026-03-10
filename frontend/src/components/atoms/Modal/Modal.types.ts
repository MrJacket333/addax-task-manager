import React from 'react';

export type ModalProps<T> = React.PropsWithChildren & {
  callback: (data: T) => void;
  isOpen: boolean;
  onRequestClose: () => void;
}