import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withStyles } from '@material-ui/core'

const style = theme => ({

})

class Test extends PureComponent {
  render() {
    const { name, classes } = this.props
    return (
      <>
        {name}
      </>
    )
  }
}

Test.propTypes = {
  name: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({

})

const actions = {

}

export default compose(
  connect(
    mapStateToProps,
    actions,
  ),
  withStyles(style),
)(Test)