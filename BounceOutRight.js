import styled, { keyframes } from 'styled-components';
import BaseAnimation from './BaseAnimation';

const bounceOutRightAnimation = keyframes`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`;

const BounceOutRight = styled(BaseAnimation)`
  animation-name: ${bounceOutRightAnimation};
`;

export default BounceOutRight;
