import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import connect, {compose} from 'redux'
import { withStyles } from '@material-ui/core'

const style = theme => ({

})

class Class extends PureComponent {
  render() {
    const { name } = this.props
    return (
      <>
        {name}
      </>
    )
  }
}

Class.propTypes = {
  name: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({

})

const actions = {

}

export default compose(
  connect(
    mapStateToProps,
    actions),
  withStyles(style)
)(Class)



