
import styled, { keyframes } from 'styled-components';
import BaseAnimation from '../BaseAnimation';

const ZoomInAnimation = keyframes`
  from {
     opacity: 0;
     transform: scale3d(.3, .3, .3);
   }

   50% {
     opacity: 1;
   }
`;

const ZoomIn = styled(BaseAnimation)`
  animation-name: ${ZoomInAnimation};
`;

export default ZoomIn;
