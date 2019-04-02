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
          <MenuItem><Link to="/add">ajouter</Link></MenuItem>
          <MenuItem><Link to="/all/edit">éditer</Link></MenuItem>
          <MenuItem><Link to="/workshop">workshop</Link></MenuItem>
          <MenuItem><Link to="/logout">logout</Link></MenuItem>
          <MenuItem><Link to="/login">login</Link></MenuItem>
          <MenuItem><Link to="/all">home</Link></MenuItem>
        </MenuList>
      </Paper>
    )
  }
}

export default withStyles(style)(MenuUser)