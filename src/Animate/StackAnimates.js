import React, { PureComponent } from 'react';
import * as Utils from './Utils';

class StackAnimates extends PureComponent {
  constructor(props) {
    super(props);
    this.state = Utils.buildState(props);
  }

  get getNextIndex() {
    return this.state.index + 1;
  }

  get getNextStartTime() {
    const time = Utils.convertToMs(
      parseFloat(Utils.removeUnit(this.state.duration))
    );
    const delay = Utils.convertToMs(
      parseFloat(Utils.removeUnit(this.state.delay))
    );
    return time + delay;
  }

  get HasMoreAnimations() {
    return this.getNextIndex < this.props.Animation.length;
  }

  renderNextAnimate() {
    if (this.HasMoreAnimations) {
      setTimeout(() => {
        this.setState(Utils.buildState(this.props, this.getNextIndex), () =>
          this.renderNextAnimate()
        );
      }, this.getNextStartTime);
    } else if (this.props.onAnimationDone) {
      setTimeout(() => {
        this.props.onAnimationDone();
      }, this.getNextStartTime);
    }
  }

  render() {
    const { Animation } = this.state;

    return <Animation {...this.state}>{this.props.children}</Animation>;
  }

  componentDidMount() {
    this.renderNextAnimate();
  }
}

export default StackAnimates;
