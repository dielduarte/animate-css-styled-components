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
            <Animate Animation={[Flash, Bounce]} duration={["2s", "0.8s"]} delay={["0.2s", "10s"]}>
                <Card rounded width="100px" height="100px">
                    card content...
                </Card>
            </Animate>
        </FullView>
    ));