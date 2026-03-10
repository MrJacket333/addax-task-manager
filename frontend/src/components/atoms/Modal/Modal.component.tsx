import ReactModal from 'react-modal';
import type { ModalProps } from './Modal.types';

export const Modal = <T,>({ isOpen, onRequestClose, children }: ModalProps<T>) => {

  return <div>
    <ReactModal isOpen={isOpen} onRequestClose={onRequestClose}>
      {children}
    </ReactModal>
  </div>
}