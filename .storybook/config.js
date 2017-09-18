import { configure } from '@kadira/storybook';

function loadStories() {
  require('../stories/Animate');
  require('../stories/Attention');
  require('../stories/Bounce');
  require('../stories/Especials');
  require('../stories/Fade');
  require('../stories/Flip');
  require('../stories/LightSpeed');
  require('../stories/Rotate');
  require('../stories/Slide');
  require('../stories/Zoom');
}

configure(loadStories, module);
