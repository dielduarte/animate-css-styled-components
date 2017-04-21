import React from 'react';
import { storiesOf } from '@kadira/storybook';
import FullView from '../Example/FullView';
import Card from '../Example/Card';
import {
  LightSpeedIn,
  LightSpeedOut
} from 'animate-css-styled-components';


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
