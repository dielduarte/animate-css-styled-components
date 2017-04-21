import React from 'react';
import { storiesOf } from '@kadira/storybook';
import FullView from '../Example/FullView';
import Card from '../Example/Card';
import {
  Flip,
  FlipInX,
  FlipInY,
  FlipOutX,
  FlipOutY
} from 'animate-css-styled-components';


storiesOf('Flip', module)
.add('Flip', () => (
  <FullView center>
    <Flip duration="0.8s" delay="0.2s">
      <Card rounded width="100px" height="100px">
        card content...
      </Card>
    </Flip>
  </FullView>
))
  .add('FlipInX', () => (
    <FullView center>
      <FlipInX duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </FlipInX>
    </FullView>
  ))
  .add('FlipInY', () => (
    <FullView center>
      <FlipInY duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </FlipInY>
    </FullView>
  ))
  .add('FlipOutX', () => (
    <FullView center>
      <FlipOutX duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </FlipOutX>
    </FullView>
  ))
  .add('FlipOutY', () => (
    <FullView center>
      <FlipOutY duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </FlipOutY>
    </FullView>
  ));
