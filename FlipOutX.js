import styled, { keyframes } from 'styled-components';
import BaseAnimation from './BaseAnimation';

const FlipOutXAnimation = keyframes`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;

const FlipOutX = styled(BaseAnimation)`
  animation-name: ${FlipOutXAnimation};
  backface-visibility: visible !important;
`;

export default FlipOutX;
