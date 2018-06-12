import React from 'react';
import { storiesOf } from '@storybook/react';
import FullView from '../Example/FullView';
import Card from '../Example/Card';
import {
  LightSpeedIn,
  LightSpeedOut
} from '../src';


storiesOf('LightSpeed', module)
.add('LightSpeedIn', () => (
  <FullView center>
    <LightSpeedIn duration="0.8s" delay="0.2s">
      <Card rounded width="100px" height="100px">
        card content...
      </Card>
    </LightSpeedIn>
  </FullView>
))
  .add('LightSpeedOut', () => (
    <FullView center>
      <LightSpeedOut duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </LightSpeedOut>
    </FullView>
  ));
