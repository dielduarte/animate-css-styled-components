import styled, { keyframes } from 'styled-components';
import BaseAnimation from './BaseAnimation';

const FadeInLeftAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
`;

const FadeInLeft = styled(BaseAnimation)`
  animation-name: ${FadeInLeftAnimation};
`;

export default FadeInLeft;
