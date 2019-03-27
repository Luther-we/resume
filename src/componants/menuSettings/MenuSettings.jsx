import React, { PureComponent } from 'react'
import {
  withStyles,
  Typography,
  Modal
} from '@material-ui/core'
import Block from '../block/BlockMixt'

const style = theme => ({
  paperModal: {
    position: 'relative',
    width: 'auto',
    margin: 'auto',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
  },
})

class MenuSettings extends PureComponent {
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
          <Block
            title='UN BLOC MIXTE'
            category='mokup'
            description="Une description brève et courte, au maximum complète ou du moins tentant de l'être.
            L'idée est un Lorem Ipsum pour  de mieux présenter le contenu génral de cette carde. Il s'agit d'ailleurs d'un contenu mixte."
            share
            like
            expand
            info
          />
        </div>
      </Modal>
    )
  }
}

export default withStyles(style)(MenuSettings)
