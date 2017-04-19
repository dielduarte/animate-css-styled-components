import styled, { keyframes } from 'styled-components';
import BaseAnimation from './BaseAnimation';

const FlipInXAnimation = keyframes`
  from {
      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      animation-timing-function: ease-in;
      opacity: 0;
    }

    40% {
      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      animation-timing-function: ease-in;
    }

    60% {
      transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
      opacity: 1;
    }

    80% {
      transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    }

    to {
      transform: perspective(400px);
    }
`;

const FlipInX = styled(BaseAnimation)`
  animation-name: ${FlipInXAnimation};
  backface-visibility: visible !important;
`;

export default FlipInX;
