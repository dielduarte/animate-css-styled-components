export const isArray = (obj) => Array.isArray(obj);

export const buildState = (props, index = 0) => {
  let state = {};
  Object.entries(props).forEach((prop) => {  
    const key =  prop[0];
    const value = prop[1];

    if(key !== 'children') {
      state[key] = isArray(value) ? value[index] : value;
    }
  });

  state['index'] = index;
  return state;
};

export const removeUnit = (time) => time.replace('s', '');

export const convertToMs = (time) => time * 1000;