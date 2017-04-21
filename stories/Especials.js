import React from 'react';
import { storiesOf } from '@kadira/storybook';
import FullView from '../Example/FullView';
import Card from '../Example/Card';
import {
  Hinge,
  RollIn,
  RollOut
} from 'animate-css-styled-components';


storiesOf('Especials', module)
.add('Hinge', () => (
  <FullView center>
    <Hinge duration="0.8s" delay="0.2s">
      <Card rounded width="100px" height="100px">
        card content...
      </Card>
    </Hinge>
  </FullView>
))
  .add('RollIn', () => (
    <FullView center>
      <RollIn duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </RollIn>
    </FullView>
  ))
  .add('RollOut', () => (
    <FullView center>
      <RollOut duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </RollOut>
    </FullView>
  ));
