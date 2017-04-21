import React from 'react';
import { storiesOf } from '@kadira/storybook';
import FullView from '../Example/FullView';
import Card from '../Example/Card';
import {
  FadeIn,
  FadeInDown,
  FadeInDownBig,
  FadeInLeft,
  FadeInLeftBig,
  FadeInRight,
  FadeInRightBig,
  FadeInUp,
  FadeInUpBig,
  FadeOut,
  FadeOutDown,
  FadeOutDownBig,
  FadeOutLeft,
  FadeOutLeftBig,
  FadeOutRight,
  FadeOutRightBig,
  FadeOutUp,
  FadeOutUpBig
} from 'animate-css-styled-components';


storiesOf('Fade', module)
.add('FadeIn', () => (
  <FullView center>
    <FadeIn duration="0.8s" delay="0.2s">
      <Card rounded width="100px" height="100px">
        card content...
      </Card>
    </FadeIn>
  </FullView>
))
  .add('FadeInDown', () => (
    <FullView center>
      <FadeInDown duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </FadeInDown>
    </FullView>
  ))
  .add('FadeInDownBig', () => (
    <FullView center>
      <FadeInDownBig duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </FadeInDownBig>
    </FullView>
  ))
  .add('FadeInLeft', () => (
    <FullView center>
      <FadeInLeft duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </FadeInLeft>
    </FullView>
  ))
  .add('FadeInLeftBig', () => (
    <FullView center>
      <FadeInLeftBig duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </FadeInLeftBig>
    </FullView>
  ))
  .add('FadeInRight', () => (
    <FullView center>
      <FadeInRight duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </FadeInRight>
    </FullView>
  ))
  .add('FadeInRightBig', () => (
    <FullView center>
      <FadeInRightBig duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </FadeInRightBig>
    </FullView>
  ))
  .add('FadeInUp', () => (
    <FullView center>
      <FadeInUp duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </FadeInUp>
    </FullView>
  ))
  .add('FadeInUpBig', () => (
    <FullView center>
      <FadeInUpBig duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </FadeInUpBig>
    </FullView>
  ))
  .add('FadeOut', () => (
    <FullView center>
      <FadeOut duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </FadeOut>
    </FullView>
  ))
  .add('FadeOutDown', () => (
    <FullView center>
      <FadeOutDown duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </FadeOutDown>
    </FullView>
  ))
  .add('FadeOutDownBig', () => (
    <FullView center>
      <FadeOutDownBig duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </FadeOutDownBig>
    </FullView>
  ))
  .add('FadeOutLeft', () => (
    <FullView center>
      <FadeOutLeft duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </FadeOutLeft>
    </FullView>
  ))
  .add('FadeOutLeftBig', () => (
    <FullView center>
      <FadeOutLeftBig duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </FadeOutLeftBig>
    </FullView>
  ))
  .add('FadeOutRight', () => (
    <FullView center>
      <FadeOutRight duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </FadeOutRight>
    </FullView>
  ))
  .add('FadeOutRightBig', () => (
    <FullView center>
      <FadeOutRightBig duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </FadeOutRightBig>
    </FullView>
  ))
  .add('FadeOutUp', () => (
    <FullView center>
      <FadeOutUp duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </FadeOutUp>
    </FullView>
  ))
  .add('FadeOutUpBig', () => (
    <FullView center>
      <FadeOutUpBig duration="0.8s" delay="0.2s">
        <Card rounded width="100px" height="100px">
          card content...
        </Card>
      </FadeOutUpBig>
    </FullView>
  ));
