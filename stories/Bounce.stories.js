import React from 'react';
import { storiesOf } from '@storybook/react';
import FullView from '../Example/FullView';
import Card from '../Example/Card';
import {
  Bounce,
  BounceIn,
  BounceInDown,
  BounceInLeft,
  BounceInRight,
  BounceInUp,
  BounceOut,
  BounceOutDown,
  BounceOutLeft,
  BounceOutRight,
  BounceOutUp
} from '../src';


storiesOf('Bounce', module)
.add('Bounce', () => (
  <FullView center>
    <Bounce duration="0.8s" delay="0.2s">
      <Card rounded width="100px" height="100px">
        card content...
      </Card>
    </Bounce>
  </FullView>
))
  .add('BounceIn', () => (
    <FullView center>
      <BounceIn duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </BounceIn>
    </FullView>
  ))
  .add('BounceInDown', () => (
    <FullView center>
      <BounceInDown duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </BounceInDown>
    </FullView>
  ))
  .add('BounceInLeft', () => (
    <FullView center>
      <BounceInLeft duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </BounceInLeft>
    </FullView>
  ))
  .add('BounceInRight', () => (
    <FullView center>
      <BounceInRight duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </BounceInRight>
    </FullView>
  ))
  .add('BounceInUp', () => (
    <FullView center>
      <BounceInUp duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </BounceInUp>
    </FullView>
  ))
  .add('BounceOut', () => (
    <FullView center>
      <BounceOut duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </BounceOut>
    </FullView>
  ))
  .add('BounceOutDown', () => (
    <FullView center>
      <BounceOutDown duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </BounceOutDown>
    </FullView>
  ))
  .add('BounceOutLeft', () => (
    <FullView center>
      <BounceOutLeft duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </BounceOutLeft>
    </FullView>
  ))
  .add('BounceOutRight', () => (
    <FullView center>
      <BounceOutRight duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </BounceOutRight>
    </FullView>
  ))
  .add('BounceOutUp', () => (
    <FullView center>
      <BounceOutUp duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </BounceOutUp>
    </FullView>
  ));
