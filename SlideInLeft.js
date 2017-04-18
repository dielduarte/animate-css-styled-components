import styled, { keyframes } from 'styled-components';
import BaseAnimation from './BaseAnimation';

const SlideInLeftAnimation = keyframes`
  from {
      transform: translate3d(-100%, 0, 0);
      visibility: visible;
    }

    to {
      transform: translate3d(0, 0, 0);
    }
`;

const SlideInLeft = styled(BaseAnimation)`
  animation-name: ${SlideInLeftAnimation};
`;

export default SlideInLeft;
