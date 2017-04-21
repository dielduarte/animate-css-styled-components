import styled, { keyframes } from 'styled-components';
import BaseAnimation from '../BaseAnimation';

const RotateOutUpLeftAnimation = keyframes`
  from {
    transform-origin: left bottom;
    opacity: 1;
  }

  to {
    transform-origin: left bottom;
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;

const RotateOutUpLeft = styled(BaseAnimation)`
  animation-name: ${RotateOutUpLeftAnimation};
`;

export default RotateOutUpLeft;
