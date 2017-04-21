import styled, { keyframes } from 'styled-components';
import BaseAnimation from '../BaseAnimation';

const SlideInDownAnimation = keyframes`
  from {
      transform: translate3d(0, -100%, 0);
      visibility: visible;
    }

    to {
      transform: translate3d(0, 0, 0);
    }
`;

const SlideInDown = styled(BaseAnimation)`
  animation-name: ${SlideInDownAnimation};
`;

export default SlideInDown;
