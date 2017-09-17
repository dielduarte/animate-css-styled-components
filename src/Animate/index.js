import React from 'react';
import * as Utils from './Utils';

class Animate extends PureComponent {
  render() {
    const { Animation } = this.props;

    if (Utils.isArray(Animation)) {
        return 'multiple animations';
    } 
    
    return (
      <Animation {...this.props}>
        {this.props.children}
      </Animation>
    );
  }
}

export default Animate;