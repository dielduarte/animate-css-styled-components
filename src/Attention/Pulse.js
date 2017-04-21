import styled, { keyframes } from 'styled-components';
import BaseAnimation from '../BaseAnimation';

const PulseAnimation = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;

const Pulse = styled(BaseAnimation)`
  animation-name: ${PulseAnimation};
`;

export default Pulse;
