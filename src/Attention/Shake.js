import styled, { keyframes } from 'styled-components';
import BaseAnimation from '../BaseAnimation';

const ShakeAnimation = keyframes`
  from, to {
   transform: translate3d(0, 0, 0);
  }

  10%, 30%, 50%, 70%, 90% {
   transform: translate3d(-10px, 0, 0);
  }

  20%, 40%, 60%, 80% {
   transform: translate3d(10px, 0, 0);
  }
`;

const Shake = styled(BaseAnimation)`
  animation-name: ${ShakeAnimation};
`;

export default Shake;
