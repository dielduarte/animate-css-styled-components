import styled, { keyframes } from 'styled-components';
import BaseAnimation from '../BaseAnimation';

const SlideOutLeftAnimation = keyframes`
  from {
      transform: translate3d(0, 0, 0);
    }

    to {
      visibility: hidden;
      transform: translate3d(-100%, 0, 0);
    }
`;

const SlideOutLeft = styled(BaseAnimation)`
  animation-name: ${SlideOutLeftAnimation};
`;

export default SlideOutLeft;
