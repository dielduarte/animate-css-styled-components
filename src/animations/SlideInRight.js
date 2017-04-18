import styled, { keyframes } from 'styled-components';
import BaseAnimation from './BaseAnimation';

const SlideInRightAnimation = keyframes`
  from {
      transform: translate3d(100%, 0, 0);
      visibility: visible;
    }

    to {
      transform: translate3d(0, 0, 0);
    }
`;

const SlideInRight = styled(BaseAnimation)`
  animation-name: ${SlideInRightAnimation};
`;

export default SlideInRight;
