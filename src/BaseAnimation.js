import styled from 'styled-components';

const BaseAnimation = styled.div`
  animation-duration: ${props => props.duration ? props.duration : '1s'};
  animation-timing-function: ${props => props.timingFunction ? props.timingFunction : 'ease'};
  animation-delay: ${props => props.delay ? props.delay : '0s'};
  animation-iteration-count: ${props => props.iterationCount ? props.iterationCount : '1'};
  animation-direction: ${props => props.direction ? props.direction : 'normal'};
  animation-fill-mode: ${props => props.fillMode ? props.fillMode : 'both'};
  animation-play-state:  ${props => props.playState ? props.playState : 'running'};
  display: ${props => props.inline ? 'inline-block' : 'initial'};
`;

export default BaseAnimation;
