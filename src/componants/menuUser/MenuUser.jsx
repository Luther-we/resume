import React, { PureComponent } from 'react'
import {
  Paper,
  MenuList,
  MenuItem,
  withStyles
} from '@material-ui/core'
import {Link} from 'react-router-dom'

const style = theme => ({
  container : {
    position: 'absolute',
    width: '100px',
    bottom: 36,
    right: 0,
    left: 0
  }
})

class MenuUser extends PureComponent{
  render() {
    const { classes } = this.props
    return (
      <Paper className={classes.container}>
        <MenuList>
          <MenuItem><Link to='/add-something'>Add Article</Link></MenuItem>
          <MenuItem>Modifier</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Paper>
    )
  }
}

export default withStyles(style)(MenuUser)