import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography/Typography'
import Modal from '@material-ui/core/Modal/Modal'

const style = theme => ({
  paperModal: {
    position: 'relative',
    width: '90%',
    height: '90%',
    margin: 'auto',
    // backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
  },
  typo: {
    color: 'white'
  }
})

class MenuSubject extends PureComponent {
  render() {
    const { classes, open, close } = this.props

    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={() => close()}
      >
        <div className={classes.paperModal}>
          <Typography variant="h6" id="modal-title">
            Text in a modal
          </Typography>
          <Typography variant="subtitle1" id="simple-modal-description" className={classes.typo}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </div>
      </Modal>
    )
  }
}

export default withStyles(style)(MenuSubject)