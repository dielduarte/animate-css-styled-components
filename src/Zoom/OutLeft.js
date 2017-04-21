
import styled, { keyframes } from 'styled-components';
import BaseAnimation from '../BaseAnimation';

const ZoomOutLeftAnimation = keyframes`
  40% {
      opacity: 1;
      transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);
    }

    to {
      opacity: 0;
      transform: scale(.1) translate3d(-2000px, 0, 0);
      transform-origin: left center;
    }
`;

const ZoomOutLeft = styled(BaseAnimation)`
  animation-name: ${ZoomOutLeftAnimation};
`;

export default ZoomOutLeft;
