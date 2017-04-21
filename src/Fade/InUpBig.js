import styled, { keyframes } from 'styled-components';
import BaseAnimation from '../BaseAnimation';

const FadeInUpBigAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
`;

const FadeInUpBig = styled(BaseAnimation)`
  animation-name: ${FadeInUpBigAnimation};
`;

export default FadeInUpBig;
