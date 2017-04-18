import styled, { keyframes } from 'styled-components';
import BaseAnimation from './BaseAnimation';

const FadeInUpAnimation = keyframes`
  from {
   opacity: 0;
   transform: translate3d(0, 100%, 0);
  }

  to {
   opacity: 1;
   transform: none;
  }
`;

const FadeInUp = styled(BaseAnimation)`
  animation-name: ${FadeInUpAnimation};
`;

export default FadeInUp;
