import styled, { keyframes } from 'styled-components';
import BaseAnimation from './BaseAnimation';

const FadeOutUpAnimation = keyframes`
  from {
     opacity: 1;
   }

   to {
     opacity: 0;
     transform: translate3d(0, -100%, 0);
   }
`;

const FadeOutUp = styled(BaseAnimation)`
  animation-name: ${FadeOutUpAnimation};
`;

export default FadeOutUp;
