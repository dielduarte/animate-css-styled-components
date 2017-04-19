import styled, { keyframes } from 'styled-components';
import BaseAnimation from './BaseAnimation';

const FadeOutLeftAnimation = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`;

const FadeOutLeft = styled(BaseAnimation)`
  animation-name: ${FadeOutLeftAnimation};
`;

export default FadeOutLeft;
