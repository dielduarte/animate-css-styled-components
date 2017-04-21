import styled, { keyframes } from 'styled-components';
import BaseAnimation from '../BaseAnimation';

const SlideOutDownAnimation = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;

const SlideOutDown = styled(BaseAnimation)`
  animation-name: ${SlideOutDownAnimation};
`;

export default SlideOutDown;
