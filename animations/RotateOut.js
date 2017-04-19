import styled, { keyframes } from 'styled-components';
import BaseAnimation from './BaseAnimation';

const RotateOutAnimation = keyframes`
  from {
      transform-origin: center;
      opacity: 1;
    }

    to {
      transform-origin: center;
      transform: rotate3d(0, 0, 1, 200deg);
      opacity: 0;
    }
`;

const RotateOut = styled(BaseAnimation)`
  animation-name: ${RotateOutAnimation};
`;

export default RotateOut;
