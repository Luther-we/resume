import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import connect, {compose} from 'redux'
import { withStyles } from '@material-ui/core'
import { $action$ } from '...'

const style = theme => ({

})

class $Class$ extends PureComponent {
  render() {
    const { name } = this.props
    return (
      <>
        {name}
      </>
    )
  }
}

$Class$.propTypes = {
  $propsFromState: PropTypes.bool.isRequired
}

$Class$.defaultProps= {
  $propsFromState:
}

const mapStateToProps = state => ({
  $propsFromState: state.
})

const actions = {
  $action$
}

export default compose(
  connect(
    mapStateToProps,
    actions),
  withStyles(style)
)($Class$)



