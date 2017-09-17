import React, { PureComponent } from 'react';

import * as Utils from './Utils';
import StackAnimates from './StackAnimates';

class Animate extends PureComponent {
  render() {
    const { Animation } = this.props;

    if (Utils.isArray(Animation)) {
      return <StackAnimates {...this.props} />;
    } 
    
    return (
      <Animation {...this.props}>
        {this.props.children}
      </Animation>
    );
  }
}

export default Animate;