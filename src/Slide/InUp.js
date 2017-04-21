import styled, { keyframes } from 'styled-components';
import BaseAnimation from '../BaseAnimation';

const SlideInUpAnimation = keyframes`
  from {
     transform: translate3d(0, 100%, 0);
     visibility: visible;
   }

   to {
     transform: translate3d(0, 0, 0);
   }
`;

const SlideInUp = styled(BaseAnimation)`
  animation-name: ${SlideInUpAnimation};
`;

export default SlideInUp;
