import styled, { keyframes } from 'styled-components';
import BaseAnimation from './BaseAnimation';

const LightSpeedOutAnimation = keyframes`
  from {
     opacity: 1;
   }

   to {
     transform: translate3d(100%, 0, 0) skewX(30deg);
     opacity: 0;
   }
`;

const LightSpeedOut = styled(BaseAnimation)`
  animation-name: ${LightSpeedOutAnimation};
  animation-timing-function: ease-in;
`;

export default LightSpeedOut;
