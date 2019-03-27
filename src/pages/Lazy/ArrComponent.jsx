import React, {PureComponent} from 'react'


class ArrComponent extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  componentWillMount() {
    console.log('-- ARRCOMPONENT -- Component Will Mount ')
  }

  componentDidMount() {
    console.log('-- ARRCOMPONENT -- Component Did Mount ')
  }

  counter() {
    this.setState=({
      count: this.state.count +1
    })
  }

  render() {
    console.log('-- ARRCOMPONENT -- Component Render ')

    this.counter()

    const arr = Array.apply(null, Array(10000)).map((a, i) => <li key={i}>{a} {i}</li>)
    return (
      <>
        <h1>{this.state.count}</h1>
        <ul>
          {arr}

        </ul>
      </>
    )
  }
}

export default ArrComponent