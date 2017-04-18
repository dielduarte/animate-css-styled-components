import styled, { keyframes } from 'styled-components';
import BaseAnimation from './BaseAnimation';

const bounceOutDownAnimation = keyframes`
  20% {
    transform: translate3d(0, 10px, 0);
  }

  40%, 45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`;

const BounceOutDown = styled(BaseAnimation)`
  animation-name: ${bounceOutDownAnimation};
`;

export default BounceOutDown;
