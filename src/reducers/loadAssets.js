
function loadAssets(state = [], action) {
  switch (action.type) {
    case 'LOAD_ASSETS':
      return action.assets;
    default:
      return state;
  }
}

export default loadAssets;