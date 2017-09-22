import React from 'react';
import { storiesOf } from '@kadira/storybook';
import FullView from '../Example/FullView';
import Card from '../Example/Card';
import {
  Flash,
  HeadShake,
  Jello,
  Pulse,
  RubberBand,
  Shake,
  Swing,
  Tada,
  Wobble
} from '../src';


storiesOf('Attention', module)
  .add('Flash', () => (
    <FullView center>
      <Flash duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </Flash>
    </FullView>
  ))
  .add('HeadShake', () => (
    <FullView center>
      <HeadShake duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </HeadShake>
    </FullView>
  ))
  .add('Jello', () => (
    <FullView center>
      <Jello duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </Jello>
    </FullView>
  ))
  .add('Pulse', () => (
    <FullView center>
      <Pulse duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </Pulse>
    </FullView>
  ))
  .add('RubberBand', () => (
    <FullView center>
      <RubberBand duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </RubberBand>
    </FullView>
  ))
  .add('Shake', () => (
    <FullView center>
      <Shake duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </Shake>
    </FullView>
  ))
  .add('Swing', () => (
    <FullView center>
      <Swing duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </Swing>
    </FullView>
  ))
  .add('Tada', () => (
    <FullView center>
      <Tada duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </Tada>
    </FullView>
  ))
  .add('Wobble', () => (
    <FullView center>
      <Wobble duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </Wobble>
    </FullView>
  ));
