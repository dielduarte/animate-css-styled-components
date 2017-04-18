import styled, { keyframes } from 'styled-components';
import BaseAnimation from './BaseAnimation';

const FlipOutYAnimation = keyframes`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;

const FlipOutY = styled(BaseAnimation)`
  animation-name: ${FlipOutYAnimation};
  backface-visibility: visible !important;
`;

export default FlipOutY;
