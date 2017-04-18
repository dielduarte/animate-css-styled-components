import styled, { keyframes } from 'styled-components';
import BaseAnimation from './BaseAnimation';

const RollOutAnimation = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;

const RollOut = styled(BaseAnimation)`
  animation-name: ${RollOutAnimation};
`;

export default RollOut;
