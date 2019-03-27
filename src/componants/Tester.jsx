import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import PropType from 'prop-types'
import {mountState} from './testerActions'

class Tester extends PureComponent {

  componentDidMount() {
    console.log(this.props)
    this.props.mountState()
  }

  render() {
    const {match} = this.props
    return (
      <div>
        <p>Hello you !</p>
        <h3>{match.params.id}</h3>
        <h3>{this.props.test}</h3>
        <h3>Hello you !</h3>
        <h3>Hello you !</h3>
        {/*<button onClick={() => goForward()}></button>*/}
      </div>
    )
  }
}

const mapStateToProps= state => {
  // console.log(state)
  return ({
    test: state.tester.test,
    mountState: actions.mountState
    // goForward: state.history.goForward
  })
}

const actions = {
  mountState
}

Tester.propType = {
  test: PropType.string,
  mountState: PropType.func
  // goForward: PropType.func
}

export default connect(mapStateToProps, actions)(Tester)