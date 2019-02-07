
import assets from '../assets';

export function setLoadAssets(){
    return {
      type: 'LOAD_ASSETS',
      assets
    }
}

export function setPreviewAssets(previewAsset){
    return {
      type: 'PREVIEW_ASSETS',
      previewAsset
    }
}

export function setReceiveId(id){
    return {
      type: 'RECEIVE_ID',
      id
    }
}