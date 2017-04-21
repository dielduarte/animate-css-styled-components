import styled, { keyframes } from 'styled-components';
import BaseAnimation from '../BaseAnimation';

const FadeOutDownAnimation = keyframes`
  from {
     opacity: 1;
   }

   to {
     opacity: 0;
     transform: translate3d(0, 100%, 0);
   }
`;

const FadeOutDown = styled(BaseAnimation)`
  animation-name: ${FadeOutDownAnimation};
`;

export default FadeOutDown;
