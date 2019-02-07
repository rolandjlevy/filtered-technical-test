import { combineReducers } from 'redux';
import receiveId from './receiveId';
import loadAssets from './loadAssets';
import previewAsset from './previewAsset';

export default combineReducers({
    receiveId,
    loadAssets,
    previewAsset
});