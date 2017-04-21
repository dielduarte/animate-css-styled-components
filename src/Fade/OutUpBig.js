import styled, { keyframes } from 'styled-components';
import BaseAnimation from '../BaseAnimation';

const FadeOutUpBigAnimation = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;

const FadeOutUpBig = styled(BaseAnimation)`
  animation-name: ${FadeOutUpBigAnimation};
`;

export default FadeOutUpBig;
