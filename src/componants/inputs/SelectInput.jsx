import React, { PureComponent } from 'react'
import { FormControl, InputLabel, Select, MenuItem} from '@material-ui/core'

class SelectInput extends PureComponent {
  constructor(props) {
    super(props)
    this.state={
      value:''
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  renderMenuItem = (arr) => {
    const test = arr.map((item, index) => {
      return (
        <MenuItem value={item} key={index}>{item}</MenuItem>
      )
    })
    return test
  }

  render() {
    const {label, input, arrayItem} = this.props

    console.log(arrayItem)

    return (
      <FormControl>
        <InputLabel htmlFor="age-simple">{label}</InputLabel>
        <Select
          // value={this.state.value}
          // onChange={this.handleChange}
          // inputProps={{
          //   name: 'age',
            id={label}
          // }}
          {...input}
        >
          {this.renderMenuItem(arrayItem)}
        </Select>
      </FormControl>
    )
  }
}

export default SelectInput