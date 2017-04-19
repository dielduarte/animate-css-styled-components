import styled, { keyframes } from 'styled-components';
import BaseAnimation from './BaseAnimation';

const RotateOutUpRightAnimation = keyframes`
  from {
      transform-origin: right bottom;
      opacity: 1;
    }

    to {
      transform-origin: right bottom;
      transform: rotate3d(0, 0, 1, 90deg);
      opacity: 0;
    }
`;

const RotateOutUpRight = styled(BaseAnimation)`
  animation-name: ${RotateOutUpRightAnimation};
`;

export default RotateOutUpRight;
