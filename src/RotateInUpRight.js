import styled, { keyframes } from 'styled-components';
import BaseAnimation from './BaseAnimation';

const RotateInUpRightAnimation = keyframes`
  from {
    transform-origin: right bottom;
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform-origin: right bottom;
    transform: none;
    opacity: 1;
  }
`;

const RotateInUpRight = styled(BaseAnimation)`
  animation-name: ${RotateInUpRightAnimation};
`;

export default RotateInUpRight;
