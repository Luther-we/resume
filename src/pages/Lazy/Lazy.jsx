import React, {PureComponent, lazy, Suspense} from 'react'
// import {WithLoad} from './WithLoad'
import ArrComponent from './ArrComponent'
import Loader from './Loader'

// const ArrComponent = lazy (() => import ('./ArrComponent'))


class Lazy extends PureComponent{

  componentWillMount() {
    console.log('-- LAZY -- Component Will Mount ')
  }

  componentDidMount() {
    console.log('-- LAZY -- Component Did Mount ')
  }

  render() {
    console.log('-- LAZY -- Component Render ')
    return (
      <>
        <Suspense fallback={<Loader />}>
          <ArrComponent />
        </Suspense>
      </>
    )
  }
}

export default Lazy
