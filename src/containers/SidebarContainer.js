import { connect } from 'react-redux';
import { setReceiveId, setLoadAssets } from '../actions';
import SidebarButtons from '../components/SidebarButtons';

function mapStateToProps(state) {
  return {
    assets: state.assets,
    receiveId: state.receiveId
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setReceiveId: (id) => {
      dispatch(setReceiveId(id))
    },
    setLoadAssets: () => {
      dispatch(setLoadAssets())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarButtons)
