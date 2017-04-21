import React from 'react';
import { storiesOf } from '@kadira/storybook';
import FullView from '../Example/FullView';
import Card from '../Example/Card';
import {
  SlideInDown,
  SlideInLeft,
  SlideInRight,
  SlideInUp,
  SlideOutDown,
  SlideOutLeft,
  SlideOutRight,
  SlideOutUp
} from 'animate-css-styled-components';


storiesOf('Slide', module)
  .add('SlideInDown', () => (
    <FullView center>
      <SlideInDown duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </SlideInDown>
    </FullView>
  ))
  .add('SlideInLeft', () => (
    <FullView center>
      <SlideInLeft duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </SlideInLeft>
    </FullView>
  ))
  .add('SlideInRight', () => (
    <FullView center>
      <SlideInRight duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </SlideInRight>
    </FullView>
  ))
  .add('SlideInUp', () => (
    <FullView center>
      <SlideInUp duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </SlideInUp>
    </FullView>
  ))
  .add('SlideOutDown', () => (
    <FullView center>
      <SlideOutDown duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </SlideOutDown>
    </FullView>
  ))
  .add('SlideOutLeft', () => (
    <FullView center>
      <SlideOutLeft duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </SlideOutLeft>
    </FullView>
  ))
  .add('SlideOutRight', () => (
    <FullView center>
      <SlideOutRight duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </SlideOutRight>
    </FullView>
  ))
  .add('SlideOutUp', () => (
    <FullView center>
      <SlideOutUp duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </SlideOutUp>
    </FullView>
  ));
