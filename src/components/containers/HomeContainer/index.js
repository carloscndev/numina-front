// Import Modules
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Import Components
import HomePage from '../../pages/Home'

import {
  setUsers,
  getUsers
} from '../../../redux/actions/Home'

export const mapStateToProps = state => {
  return {
    home: state.Home
  }
}

export const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    setUsers,
    getUsers
  }, dispatch)
})

const MainLayoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)

export default MainLayoutContainer
