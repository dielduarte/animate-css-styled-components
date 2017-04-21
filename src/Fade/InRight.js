import styled, { keyframes } from 'styled-components';
import BaseAnimation from '../BaseAnimation';

const FadeInRightAnimation = keyframes`
  from {
     opacity: 0;
     transform: translate3d(100%, 0, 0);
   }

   to {
     opacity: 1;
     transform: none;
   }
`;

const FadeInRight = styled(BaseAnimation)`
  animation-name: ${FadeInRightAnimation};
`;

export default FadeInRight;
