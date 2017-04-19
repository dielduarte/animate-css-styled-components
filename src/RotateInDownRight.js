import styled, { keyframes } from 'styled-components';
import BaseAnimation from './BaseAnimation';

const RotateInDownRightAnimation = keyframes`
  from {
     transform-origin: right bottom;
     transform: rotate3d(0, 0, 1, 45deg);
     opacity: 0;
   }

   to {
     transform-origin: right bottom;
     transform: none;
     opacity: 1;
   }
`;

const RotateInDownRight = styled(BaseAnimation)`
  animation-name: ${RotateInDownRightAnimation};
`;

export default RotateInDownRight;
