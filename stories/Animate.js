import React from 'react';
import { storiesOf } from '@kadira/storybook';
import FullView from '../Example/FullView';
import Card from '../Example/Card';
import Animate, {
    Flash,
    Bounce
} from 'animate-css-styled-components';


storiesOf('Animate', module)
    .add('Flash', () => (
        <FullView center>
            <Animate Animation={[Flash, Bounce]} duration={["1s", "0.8s"]} delay={["0.2s", "5s"]}>
                <Card rounded width="100px" height="100px">
                    card content...
                </Card>
            </Animate>
        </FullView>
    ));