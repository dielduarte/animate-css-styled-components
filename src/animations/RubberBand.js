import styled, { keyframes } from 'styled-components';
import BaseAnimation from './BaseAnimation';

const RubberBandAnimation = keyframes`
  from {
      transform: scale3d(1, 1, 1);
    }

    30% {
      transform: scale3d(1.25, 0.75, 1);
    }

    40% {
      transform: scale3d(0.75, 1.25, 1);
    }

    50% {
      transform: scale3d(1.15, 0.85, 1);
    }

    65% {
      transform: scale3d(.95, 1.05, 1);
    }

    75% {
      transform: scale3d(1.05, .95, 1);
    }

    to {
      transform: scale3d(1, 1, 1);
    }
`;

const RubberBand = styled(BaseAnimation)`
  animation-name: ${RubberBandAnimation};
`;

export default RubberBand;
