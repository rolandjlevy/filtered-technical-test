function loadAssets(state = [], action) {
  switch (action.type) {
    case 'LOAD_ASSETS':
      return action.assets;
    default:
      return state;
  }
}

export default loadAssets;

// import assets from '../assets'

// function loadAssets(state = assets) {
//   return state;
// }

// export default loadAssets;
