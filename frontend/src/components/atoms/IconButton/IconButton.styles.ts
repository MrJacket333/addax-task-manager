import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const IconButtonComponent = styled.button<{ $noBorder?: boolean, $width?: number, $height?: number }>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  width: ${({ $width }) =>  $width ?? 32}px;
  height: ${({ $height }) =>  $height ?? 32}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(FontAwesomeIcon)`
  color: #000000;
  width: 16px;
  height: 16px;
`;
