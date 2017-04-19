import styled, { keyframes } from 'styled-components';
import BaseAnimation from './BaseAnimation';

const FadeOutRightBigAnimation = keyframes`
  from {
   opacity: 1;
  }

  to {
   opacity: 0;
   transform: translate3d(2000px, 0, 0);
  }
`;

const FadeOutRightBig = styled(BaseAnimation)`
  animation-name: ${FadeOutRightBigAnimation};
`;

export default FadeOutRightBig;
