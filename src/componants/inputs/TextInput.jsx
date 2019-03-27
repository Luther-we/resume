import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {FormControl, InputLabel, Input, withStyles} from '@material-ui/core'

const style = {
}

class TextInput
  extends PureComponent {

  render() {
    console.log(this.props)
    const {label, input, type, autoComplete, classes} = this.props

    return (
      <FormControl
        className={classes.fieldS}>
        <InputLabel htmlFor="adornment-password">{label}</InputLabel>
        <Input
          id={label}
          autoComplete={autoComplete || 'off'}
          // error={meta.error && meta.touched}
          className={classes.fieldS}
          type={type ? type : 'text'}
          {...input}
        />

      </FormControl>
    )
  }
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired
}

export default withStyles(style)(TextInput)
