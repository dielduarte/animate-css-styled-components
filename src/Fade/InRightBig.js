import styled, { keyframes } from 'styled-components';
import BaseAnimation from '../BaseAnimation';

const FadeInRightBigAnimation = keyframes`
  from {
   opacity: 0;
   transform: translate3d(2000px, 0, 0);
  }

  to {
   opacity: 1;
   transform: none;
  }
`;

const FadeInRightBig = styled(BaseAnimation)`
  animation-name: ${FadeInRightBigAnimation};
`;

export default FadeInRightBig;
