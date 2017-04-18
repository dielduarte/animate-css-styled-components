import styled, { keyframes } from 'styled-components';
import BaseAnimation from './BaseAnimation';

const RotateOutDownLeftAnimation = keyframes`
  from {
     transform-origin: left bottom;
     opacity: 1;
   }

   to {
     transform-origin: left bottom;
     transform: rotate3d(0, 0, 1, 45deg);
     opacity: 0;
   }
`;

const RotateOutDownLeft = styled(BaseAnimation)`
  animation-name: ${RotateOutDownLeftAnimation};
`;

export default RotateOutDownLeft;
