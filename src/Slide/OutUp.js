import styled, { keyframes } from 'styled-components';
import BaseAnimation from '../BaseAnimation';

const SlideOutUpAnimation = keyframes`
  from {
      transform: translate3d(0, 0, 0);
    }

    to {
      visibility: hidden;
      transform: translate3d(0, -100%, 0);
    }
`;

const SlideOutUp = styled(BaseAnimation)`
  animation-name: ${SlideOutUpAnimation};
`;

export default SlideOutUp;
