import { connect } from 'react-redux';
import { setReceiveId, setLoadAssets, setPreviewAssets } from '../actions';
import SidebarButtons from '../components/SidebarButtons';

function mapStateToProps(state) {
  return {
    receiveId: state.receiveId,
    assets: state.assets,
    previewAsset: state.previewAsset
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setReceiveId: (id) => {
      dispatch(setReceiveId(id))
    },
    setLoadAssets: () => {
      dispatch(setLoadAssets())
    },
    setPreviewAssets: (assets) => {
      dispatch(setPreviewAssets(assets))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarButtons)
