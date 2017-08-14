import styled from 'styled-components';
import { flexCenter } from './utils/styles';

const Card = styled.div`
  display: inline-block;
  padding: 10px;
  background: #FFF;
  box-shadow: 0 2px 8px rgba(14,20,26,0.2);
  ${props => props.rounded ? 'border-radius: 50%;': ''};
  width: ${props => props.width ? props.width : 'auto'};
  height: ${props => props.height ? props.height : 'auto'};
  ${flexCenter};

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export default Card;
