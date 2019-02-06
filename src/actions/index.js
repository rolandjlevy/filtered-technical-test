
import assets from '../assets';

export function setLoadAssets(){
    return {
      type: 'LOAD_ASSETS',
      assets
    }
}

export function setReceiveId(id){
    return {
      type: 'RECEIVE_ID',
      id
    }
}