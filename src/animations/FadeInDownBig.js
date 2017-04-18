import styled, { keyframes } from 'styled-components';
import BaseAnimation from './BaseAnimation';

const FadeInDownBigAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
`;

const FadeInDownBig = styled(BaseAnimation)`
  animation-name: ${FadeInDownBigAnimation};
`;

export default FadeInDownBig;
