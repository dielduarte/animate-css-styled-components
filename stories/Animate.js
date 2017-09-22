import React from 'react';
import { storiesOf } from '@kadira/storybook';
import FullView from '../Example/FullView';
import Card from '../Example/Card';
import Animate, {
    Flash,
    Bounce,
    FadeOut,
    FadeIn
} from '../src';


storiesOf('Animate (HOC)', module)
    .add('Multiple Animations', () => (
        <FullView center>
            <Animate Animation={[Flash, Bounce, FadeOut, FadeIn]} duration="0.8s" delay="0.2s">
                <Card rounded width="100px" height="100px">
                    card content...
                </Card>
            </Animate>
        </FullView>
    ))
    .add('Multiple Animations with diferent times and delays', () => (
        <FullView center>
            <Animate Animation={[Flash, Bounce, FadeOut, FadeIn]} duration={["0.8s", "3s", "2s", "0.4s"]} delay={["0.2s", "0.1s", "0.5s", "1s"]}>
                <Card rounded width="100px" height="100px">
                    card content...
                </Card>
            </Animate>
        </FullView>
    ));