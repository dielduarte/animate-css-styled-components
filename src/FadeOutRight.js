import styled, { keyframes } from 'styled-components';
import BaseAnimation from './BaseAnimation';

const FadeOutRightAnimation = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`;

const FadeOutRight = styled(BaseAnimation)`
  animation-name: ${FadeOutRightAnimation};
`;

export default FadeOutRight;
