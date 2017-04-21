import styled, { keyframes } from 'styled-components';
import BaseAnimation from '../BaseAnimation';

const SlideOutRightAnimation = keyframes`
  from {
      transform: translate3d(0, 0, 0);
    }

    to {
      visibility: hidden;
      transform: translate3d(100%, 0, 0);
    }
`;

const SlideOutRight = styled(BaseAnimation)`
  animation-name: ${SlideOutRightAnimation};
`;

export default SlideOutRight;
