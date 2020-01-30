// Import Modules
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Import Components
import MainLayout from '../../layouts/MainLayout'

import {
  setUser,
  setMenuVisible,
  setModalVisible,
  setLoading
} from '../../../redux/actions/MainLayout'

export const mapStateToProps = state => {
  return {
    mainLayout: state.MainLayout
  }
}

export const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    setUser,
    setMenuVisible,
    setModalVisible,
    setLoading
  }, dispatch)
})

const MainLayoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainLayout)

export default MainLayoutContainer
