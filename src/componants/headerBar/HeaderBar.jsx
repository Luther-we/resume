import React, { PureComponent } from 'react'

const style = {
  header: {
    width: '100%',
    height: '8%',
    backgroundColor: '#000',
    color: 'white'
  },
  p: {
    display: 'inline',
    margin: '2%'
  }
}

class HeaderBar extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      categorieArr: ['test', 'resume', 'workshop']
    }
  }


  render() {
    return (
    <div style={style.header}>
      {this.state.categorieArr.map((title, index) => <p style={style.p} key={index}>#{title}</p>)}
    </div>
    )
  }
}

export default HeaderBar