
function previewAsset(state = { previewAsset: [] }, action) {
  switch (action.type) {
    case 'PREVIEW_ASSETS':
      return { 
        ...state,
        previewAsset: [...state.previewAsset, action.previewAsset]
    }
    default:
      return state;
  }
}

export default previewAsset;