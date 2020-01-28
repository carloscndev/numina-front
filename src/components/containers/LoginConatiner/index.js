// Import Modules
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Import Components
import LoginPage from '../../pages/Login'

import {
  setEmail,
  setNickname
} from '../../../redux/actions/Login'

import {
  doLogin
} from '../../../redux/actions/MainLayout'

export const mapStateToProps = state => {
  return {
    login: state.Login
  }
}

export const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    setEmail,
    setNickname,
    doLogin
  }, dispatch)
})

const MainLayoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage)

export default MainLayoutContainer
