import { combineReducers } from 'redux';
import receiveId from './receiveId';
import loadAssets from './loadAssets';

export default combineReducers({
    receiveId,
    loadAssets
});