import React, { PureComponent } from 'react'
import {
  AppBar as AppBarMaterial,
  withStyles,
  ClickAwayListener,
  Button,
} from '@material-ui/core'
import { Settings as SettingsIcon } from '@material-ui/icons'
import MenuUser from '../menuUser/MenuUser'
import MenuSettings from '../menuSettings/MenuSettings'
import MenuSubject from '../menuSubject/MenuSubject'
import {Link} from 'react-router-dom'

const style = theme => ({
  appBar: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent:'flex-start',
    flexDirection: 'row',
    top: 'auto',
    bottom: 0,
    backgroundColor: 'black'
  },
  iconLeft : {
    flex: 1,
    width: '100%',
    alignSelf: 'flex-start'
  },
  iconRight : {
    alignSelf: 'auto'
  },
  button : {
    color: 'white',
    alignSelf: 'flex-start',
    display: 'flex'
  },
  button2 : {
    color: 'white',
  },
  button3 : {
    color: 'white',
  },
  settingsIcon: {
    alignSelf: 'flex-end'
  },
  itemAppBar: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
})

const MyLink = props => <Link to="/workshop" {...props} />


class AppBar extends PureComponent {
  constructor(props) {
    super(props)

    this.state= {
      userMenu: false,
      subjectMenu: false,
      settingsMenu: false
    }
  }

  _closeMenu = (key) => (this.setState({ [key] : false }))

  _toggleMenu = (key) => ( this.setState(state => ({[key]: !state[key]})) )

  render() {
    const { classes } = this.props

    return (
      <AppBarMaterial position="fixed" color="primary" className={classes.appBar}>
        <div className={classes.iconLeft}>
          <ClickAwayListener onClickAway={() => this._closeMenu('userMenu')}>
            <div className={classes.iconLeft}>
              <Button
                onClick={() => this._toggleMenu('userMenu')}
                className={classes.button}
              >
                Toto
              </Button>
              {this.state.userMenu && (<MenuUser/>)}
            </div>
          </ClickAwayListener>
        </div>
        <div className={classes.iconRight}>
          <Button
            onClick={() => this._toggleMenu('settingsMenu')}
            className={classes.button2}
          >
            <SettingsIcon
              className={classes.settingsIcon}
              fontSize="small"
            />
          </Button>
          <MenuSettings
            open={this.state.settingsMenu}
            close={() => this._closeMenu('settingsMenu')}
          />
            <Button
              // onClick={() => this._toggleMenu('subjectMenu')}
              className={classes.button3}
              href='/workshop'
              // component={MyLink}
            >
              #worshop
            </Button>
            <MenuSubject
              open={this.state.subjectMenu}
              close={() => this._closeMenu('subjectMenu')}
            />
          </div>
      </AppBarMaterial>


    )
  }
}

export default withStyles(style)(AppBar)
