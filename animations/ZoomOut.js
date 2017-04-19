
import styled, { keyframes } from 'styled-components';
import BaseAnimation from './BaseAnimation';

const ZoomOutAnimation = keyframes`
  from {
   opacity: 1;
  }

  50% {
   opacity: 0;
   transform: scale3d(.3, .3, .3);
  }

  to {
   opacity: 0;
  }
`;

const ZoomOut = styled(BaseAnimation)`
  animation-name: ${ZoomOutAnimation};
`;

export default ZoomOut;
