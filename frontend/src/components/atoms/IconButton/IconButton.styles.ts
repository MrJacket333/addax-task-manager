import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const IconButtonComponent = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(FontAwesomeIcon)`
  color: #000000;
  width: 16px;
  height: 16px;
`;
