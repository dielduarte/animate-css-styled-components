# animate-css-styled-components (beta)

simple port of animate css for styled-components

----------

## instalation

install animate-css-styled-components

```
[sudo] npm i --save animate-css-styled-components
```

## How to use

import animate-css-styled-components module calling global animations or a specific animation

```
import { Wobble, FadeIn, FadeOut } from 'animate-css-styled-components';
```

or

```
import Wobble from 'animate-css-styled-components/Especials/Wobble';
```


###### See how import specifics animations [here](https://github.com/dielduarte/animate-css-styled-components/docs/specif-animations).

Now, this animation is a component and you can encompassing the desired content within the component.

Example:

```
  <Wobble duration="0.8s" delay="1s">
    <Card>
      card content...
    </Card>
  </Wobble>
```

## Props

 - duration
	 - prop for represent animation-duration
	 - default `1s`
 - delay
	 - prop for represent animation-delay
	 - default `0s`
 - timingFunction
	 - prop for represent  animation-timing-function
	 - default `ease`
 - iterationCount
	 - prop for represent animation-iteration-count
	 - default `1`
 - direction
	 - prop for represent animation-direction
	 - default `normal`
 - fillMode
	 - prop for represent animation-fill-mode
	 - default `both`
 - playState
	 - prop for represent animation-play-state
	 - default `running`
 - display
	 - prop for represent display css property
	 - default `inline-block`


# WIP
 - tests with jest
 - storybook with examples of all animations.
 - `animate` component, wrapper for all animations with a only component.
