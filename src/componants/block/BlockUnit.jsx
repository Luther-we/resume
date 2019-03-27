import React, {PureComponent} from 'react'

import 'typeface-roboto'
import {
  withStyles,
  Grid,
  Paper,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
} from '@material-ui/core'

import Block from './BlockMixt'

const style = theme => ({
  root: {
    flexGrow: 1,
    margin: '5%',
    alignItems: 'flex-end',
    height: '100%'
  },
  paper: {
    backgroundColor: theme.palette.grey[50],
    minHeight: '300px',
    alignItems: 'flex-end',
    maxHeight: '100%',
    spacing: 16,
    padding: '10px'
  },
  title: {
    ...theme.typography.h3,
  },
  categorie: {
    ...theme.typography.subtitle1
  },
  description: {
    ...theme.typography.subtitle2
  },
  infoIcon: {
    backgroundColor: theme.palette.grey[50]
  },
  infoStyle: {
    marginRight: '10px',
    marginBottom: '10px',
    alignItems: 'flex-end',
    position: 'relative',
    float: 'right',
  }
})

class BlockUnit extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      direction: 'row'
    }

    this.arr = ['Title 1', 'Title 2', 'Title 3', 'Title 3', 'Title 4', 'Title 5', 'Title 6', 'Title 7', 'Title 8', 'Title 9',]
  }

  handleChange = (key) => (event, value) => {
    this.setState({
    [key]: value
    })
  }

  /**
   * render Blockunit
   * @returns {*}
   */
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>

        <Grid container  spacing={24}>
          {this.arr.map((item, index) => {
            return (
              <Block
                key={index}
                title={item}
                category='mokup'
                description="Une description brève et courte, au maximum complète ou du moins tentant de l'être.
            L'idée est un Lorem Ipsum pour  de mieux présenter le contenu génral de cette carde. Il s'agit d'ailleurs d'un contenu mixte."
                share
                like
                expand
                info
              />
            )
          })}
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
          <Grid container item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Paper className={classes.paper}>
              <FormControl component="fieldset">
                <FormLabel>direction</FormLabel>
              <RadioGroup
                row
                name="direction"
                aria-label="Direction"
                value={this.state.direction}
                onChange={this.handleChange('direction')}
              >
                <FormControlLabel value="row" control={<Radio />} label="row" />
                <FormControlLabel value="row-reverse" control={<Radio />} label="row-reverse" />
                <FormControlLabel value="column" control={<Radio />} label="column" />
                <FormControlLabel
                  value="column-reverse"
                  control={<Radio />}
                  label="column-reverse"
                />
              </RadioGroup>
              </FormControl>
              Direction = {this.state.direction}
            </Paper>
          </Grid>
          <Grid container item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Paper className={classes.paper}>
              xs={4} sm={6} md={4} lg={3}
            </Paper>
          </Grid>
          <Grid container item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Paper className={classes.paper}>
              xs={4} sm={6} md={4} lg={3}
            </Paper>
          </Grid>
          <Grid container item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Paper className={classes.paper}>
              xs={4} sm={6} md={4} lg={3}
            </Paper>
          </Grid>
          <Grid container item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Paper className={classes.paper}>
              xs={4} sm={6} md={4} lg={3}
            </Paper>
          </Grid>
        Test
        </Grid>
      </div>
    )
  }
}

export default withStyles(style)(BlockUnit)
