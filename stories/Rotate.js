import React from 'react';
import { storiesOf } from '@kadira/storybook';
import FullView from '../Example/FullView';
import Card from '../Example/Card';
import {
  RotateIn,
  RotateInDownLeft,
  RotateInDownRight,
  RotateInUpLeft,
  RotateInUpRight,
  RotateOut,
  RotateOutDownLeft,
  RotateOutDownRight,
  RotateOutUpLeft,
  RotateOutUpRight
} from 'animate-css-styled-components';


storiesOf('Rotate', module)
  .add('RotateIn', () => (
    <FullView center>
      <RotateIn duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </RotateIn>
    </FullView>
  ))
  .add('RotateInDownLeft', () => (
    <FullView center>
      <RotateInDownLeft duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </RotateInDownLeft>
    </FullView>
  ))
  .add('RotateInDownRight', () => (
    <FullView center>
      <RotateInDownRight duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </RotateInDownRight>
    </FullView>
  ))
  .add('RotateInUpLeft', () => (
    <FullView center>
      <RotateInUpLeft duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </RotateInUpLeft>
    </FullView>
  ))
  .add('RotateInUpRight', () => (
    <FullView center>
      <RotateInUpRight duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </RotateInUpRight>
    </FullView>
  ))
  .add('RotateOut', () => (
    <FullView center>
      <RotateOut duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </RotateOut>
    </FullView>
  ))
  .add('RotateOutDownLeft', () => (
    <FullView center>
      <RotateOutDownLeft duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </RotateOutDownLeft>
    </FullView>
  ))
  .add('RotateOutDownRight', () => (
    <FullView center>
      <RotateOutDownRight duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </RotateOutDownRight>
    </FullView>
  ))
  .add('RotateOutUpLeft', () => (
    <FullView center>
      <RotateOutUpLeft duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </RotateOutUpLeft>
    </FullView>
  ))
  .add('RotateOutUpRight', () => (
    <FullView center>
      <RotateOutUpRight duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </RotateOutUpRight>
    </FullView>
  ));
