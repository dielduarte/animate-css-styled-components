import styled, { keyframes } from 'styled-components';
import BaseAnimation from '../BaseAnimation';

const FadeInLeftBigAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
`;

const FadeInLeftBig = styled(BaseAnimation)`
  animation-name: ${FadeInLeftBigAnimation};
`;

export default FadeInLeftBig;
