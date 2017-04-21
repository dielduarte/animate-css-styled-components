import styled, { keyframes } from 'styled-components';
import BaseAnimation from '../BaseAnimation';

const RotateInDownLeftAnimation = keyframes`
  from {
      transform-origin: left bottom;
      transform: rotate3d(0, 0, 1, -45deg);
      opacity: 0;
    }

    to {
      transform-origin: left bottom;
      transform: none;
      opacity: 1;
    }
`;

const RotateInDownLeft = styled(BaseAnimation)`
  animation-name: ${RotateInDownLeftAnimation};
`;

export default RotateInDownLeft;
