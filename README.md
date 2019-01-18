# animate-css-styled-components

simple port of animate css for styled-components

[![Build Status](https://travis-ci.org/dielduarte/animate-css-styled-components.svg?branch=master)](https://travis-ci.org/dielduarte/animate-css-styled-components)

----------

## instalation

install animate-css-styled-components

```
[sudo] npm i --save animate-css-styled-components
```

## How to use

import animate-css-styled-components module calling global animations

```jsx
import { Wobble, FadeIn, FadeOut } from 'animate-css-styled-components';
```

###### See how import specifics animations [here](https://github.com/dielduarte/animate-css-styled-components/tree/master/docs/specific-animations).

Now, this animation is a component and you can encompassing the desired content within the component.

Example:

```jsx
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
	 - default `block`

## Animate - HOC

For convenience you can use Animate HOC to use animations stacked, you could pass a unique component to `Animation` prop or an array of animations, example:

```jsx
  import Animate, {
    Flash,
    Bounce
  } from 'animate-css-styled-components';

  <Animate 
    Animation={[Flash, Bounce]} 
    duration="0.8s" 
    delay="0.2s">
    <Card>
      card content...
    </Card>
  </Animate>
```
In this example that you could see [here](https://dielduarte.github.io/animate-css-styled-components/?selectedKind=Animate%20%28HOC%29&selectedStory=Multiple%20Animations&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel), the Bounce Animation will run after when Flash animation is finished, respecting the duration time + delay time, duration and delay are same for all animations, but you could pass diferents values to each animation prop, look:

```jsx
  import Animate, {
    Flash,
    Bounce,
    FadeOut,
    FadeIn
  } from 'animate-css-styled-components';

  <Animate 
    Animation={[Flash, Bounce, FadeOut, FadeIn]}
    duration={["0.8s", "3s", "2s", "0.4s"]}
    delay={["0.2s", "0.1s", "0.5s", "1s"]}>
    <Card>
      card content...
    </Card>
  </Animate>

```

See this example [here](https://dielduarte.github.io/animate-css-styled-components/?selectedKind=Animate%20%28HOC%29&selectedStory=Multiple%20Animations%20with%20diferent%20times%20and%20delays&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel)

Don't forget, you coul pass any [animations props](https://github.com/dielduarte/animate-css-styled-components#props) as single string if the value are same for all animations stacked or an array of values.

## Examples - Storybook

See all examples [here](https://dielduarte.github.io/animate-css-styled-components/)

## How to create custom styled animations

You can import BaseAnimation component and create your custom animation

Example:

```jsx
  import { BaseAnimation } from 'animate-css-styled-components';

  //create your custom animation
  const SlideOutDownAnimation = keyframes`
    from {
      transform: translate3d(0, 0, 0);
    }

    to {
      visibility: hidden;
      transform: translate3d(0, 100%, 0);
    }
  `;

  //extend BaseAnimation component and create
  //your custom styled animation
  const SlideOutDown = styled(BaseAnimation)`
    animation-name: ${SlideOutDownAnimation};
  `;

  //export your custom styled animation  
  export default SlideOutDown;
```

now your animation is a styled-component and you can use this like any other styled-component,
passing the all BaseAnimation [props](https://github.com/dielduarte/animate-css-styled-components#props).

Made with love and styled-components!