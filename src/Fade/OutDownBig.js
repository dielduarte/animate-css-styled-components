import styled, { keyframes } from 'styled-components';
import BaseAnimation from '../BaseAnimation';

const FadeOutDownBigAnimation = keyframes`
  from {
   opacity: 1;
  }

  to {
   opacity: 0;
   transform: translate3d(0, 2000px, 0);
  }
`;

const FadeOutDownBig = styled(BaseAnimation)`
  animation-name: ${FadeOutDownBigAnimation};
`;

export default FadeOutDownBig;
