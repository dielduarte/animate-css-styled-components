import styled, { keyframes } from 'styled-components';
import BaseAnimation from './BaseAnimation';

const SwingAnimation = keyframes`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;

const Swing = styled(BaseAnimation)`
  animation-name: ${SwingAnimation};
  transform-origin: top center;
`;

export default Swing;
