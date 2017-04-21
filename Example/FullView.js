import styled from 'styled-components';
import { flexCenter } from './utils/styles';

const FullView = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to right, #2BA4A5, #2E93CE);
  ${props => props.center ? flexCenter : ''}
`;

export default FullView;
