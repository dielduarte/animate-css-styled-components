import styled, { keyframes } from 'styled-components';
import BaseAnimation from './BaseAnimation';

const FadeInDownAnimation = keyframes`
  from {
     opacity: 0;
     transform: translate3d(0, -100%, 0);
   }

   to {
     opacity: 1;
     transform: none;
   }
`;

const FadeInDown = styled(BaseAnimation)`
  animation-name: ${FadeInDownAnimation};
`;

export default FadeInDown;
