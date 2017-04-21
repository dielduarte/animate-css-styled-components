import styled, { keyframes } from 'styled-components';
import BaseAnimation from '../BaseAnimation';

const RollInAnimation = keyframes`
  from {
      opacity: 0;
      transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
    }

    to {
      opacity: 1;
      transform: none;
    }
`;

const RollIn = styled(BaseAnimation)`
  animation-name: ${RollInAnimation};
`;

export default RollIn;
