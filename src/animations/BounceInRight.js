import styled, { keyframes } from 'styled-components';
import BaseAnimation from './BaseAnimation';

const bounceInRightAnimation = keyframes`
  from, 60%, 75%, 90%, to {
     animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
   }

   from {
     opacity: 0;
     transform: translate3d(3000px, 0, 0);
   }

   60% {
     opacity: 1;
     transform: translate3d(-25px, 0, 0);
   }

   75% {
     transform: translate3d(10px, 0, 0);
   }

   90% {
     transform: translate3d(-5px, 0, 0);
   }

   to {
     transform: none;
   }
`;

const BounceInRight = styled(BaseAnimation)`
  animation-name: ${bounceInRightAnimation};
`;

export default BounceInRight;
