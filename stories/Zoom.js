import React from 'react';
import { storiesOf } from '@kadira/storybook';
import FullView from '../Example/FullView';
import Card from '../Example/Card';
import {
  ZoomIn,
  ZoomInDown,
  ZoomInLeft,
  ZoomInRight,
  ZoomInUp,
  ZoomOut,
  ZoomOutDown,
  ZoomOutLeft,
  ZoomOutRight,
  ZoomOutUp
} from 'animate-css-styled-components';


storiesOf('Zoom', module)
  .add('ZoomIn', () => (
    <FullView center>
      <ZoomIn duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </ZoomIn>
    </FullView>
  ))
  .add('ZoomInDown', () => (
    <FullView center>
      <ZoomInDown duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </ZoomInDown>
    </FullView>
  ))
  .add('ZoomInLeft', () => (
    <FullView center>
      <ZoomInLeft duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </ZoomInLeft>
    </FullView>
  ))
  .add('ZoomInRight', () => (
    <FullView center>
      <ZoomInRight duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </ZoomInRight>
    </FullView>
  ))
  .add('ZoomInUp', () => (
    <FullView center>
      <ZoomInUp duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </ZoomInUp>
    </FullView>
  ))
  .add('ZoomOut', () => (
    <FullView center>
      <ZoomOut duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </ZoomOut>
    </FullView>
  ))
  .add('ZoomOutDown', () => (
    <FullView center>
      <ZoomOutDown duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </ZoomOutDown>
    </FullView>
  ))
  .add('ZoomOutLeft', () => (
    <FullView center>
      <ZoomOutLeft duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </ZoomOutLeft>
    </FullView>
  ))
  .add('ZoomOutRight', () => (
    <FullView center>
      <ZoomOutRight duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </ZoomOutRight>
    </FullView>
  ))
  .add('ZoomOutUp', () => (
    <FullView center>
      <ZoomOutUp duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </ZoomOutUp>
    </FullView>
  ));
