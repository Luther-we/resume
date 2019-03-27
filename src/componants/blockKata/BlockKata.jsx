import React, {PureComponent} from 'react'
import { Button } from 'semantic-ui-react'

const ButtonExample = () => <Button>ClickHere</Button>


const style = {
  container: {

  }
}

// const genArray = Array.apply(null, Array(100)).map((item, index) => <li key={index}>{index}: {this.evaluate(index)}</li>)
// const arr = Array.apply(null, Array(10000)).map((a, i) => <li key={i}>{a} {i}</li>)

class BlockKata extends PureComponent {

  genArray = () => {
    return Array.apply(null, Array(100)).map((item, index) => <li key={index}>{index}: {this.evaluate(index)}</li>)
  }

  evaluate = (index) => {
    if (index%3 === 0 && index%5 === 0) {
      return 'fizzBizz'
    } else if (index%5 === 0) {
      return 'bizz'
    }  else if (index%3 === 0) {
      return 'fizz'
    }
    return ''
  }

  render() {
    return (
      <div style={style.container}>
        Title: FizzBuzz
        <ButtonExample/>
        <ul>
          {this.genArray()}
        </ul>
      </div>
    )
  }
}

export default BlockKata