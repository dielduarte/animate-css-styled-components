import styled, { keyframes } from 'styled-components';
import BaseAnimation from './BaseAnimation';

const RotateInAnimation = keyframes`
  from {
    transform-origin: center;
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform-origin: center;
    transform: none;
    opacity: 1;
  }
`;

const RotateIn = styled(BaseAnimation)`
  animation-name: ${RotateInAnimation};
`;

export default RotateIn;
