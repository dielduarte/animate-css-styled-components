import styled, { keyframes } from 'styled-components';
import BaseAnimation from '../BaseAnimation';

const RotateOutDownRightAnimation = keyframes`
  from {
      transform-origin: right bottom;
      opacity: 1;
    }

    to {
      transform-origin: right bottom;
      transform: rotate3d(0, 0, 1, -45deg);
      opacity: 0;
    }
`;

const RotateOutDownRight = styled(BaseAnimation)`
  animation-name: ${RotateOutDownRightAnimation};
`;

export default RotateOutDownRight;
