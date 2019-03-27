import React, {PureComponent} from 'react'


class Loader extends PureComponent {
  componentWillMount() {
    console.log('-- LOADER -- Component Will Mount ')
  }

  componentDidMount() {
    console.log('-- LOADER -- Component Did Mount ')
  }

  render() {
    console.log('-- LOADER -- Component Render ')
    return(
      <>
        <h1>PAGE DE LOADER</h1>
      </>
    )
  }
}

export default Loader