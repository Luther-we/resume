import React, { PureComponent } from 'react'
import {
  withStyles,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Divider
} from '@material-ui/core'
import {
  ExpandMore as ExpandMoreIcon,
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  Info as InfoIcon
} from '@material-ui/icons'
import * as PropTypes from 'prop-types'


const style = theme => ({
  root: {
    margin: theme.spacing.unit,
    maxWidth: '100%'
  },
  infoContainer: {
    display: 'flex'
  },
  info: {
    marginLeft: 'auto'
  },
})

class BlockMixt extends PureComponent {
  render() {
    const {
      classes,
      title,
      description,
      category,
      share,
      like,
      expand,
      info
    } = this.props
    return (
      <Grid container item xs={12} sm={6} md={4} lg={3} xl={2} spacing={24}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="/img-placeholder.png"
          title="Paella dish"
        />

        <CardContent>
            <Typography variant="h6">{title}</Typography>
            <Typography variant="overline">#{category}</Typography>
              <Typography variant="body1">
                {description}
              </Typography>
        </CardContent>

        <Divider variant="middle" />

        <CardActions className={classes.infoContainer}>
          {like && <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>}
          {share && <IconButton aria-label="Share">
            <ShareIcon fontSize="small"/>
          </IconButton>}
          {info && <IconButton
            aria-label="Information"
          >
            <InfoIcon fontSize="small"/>
          </IconButton>}
          {expand && <IconButton
            aria-label="Show more"
            className={classes.info}
          >
            <ExpandMoreIcon />
          </IconButton>}
        </CardActions>

      </Card>
      </Grid>
    );
  }
}

BlockMixt.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  share: PropTypes.bool,
  like: PropTypes.bool,
  expand: PropTypes.bool,
  info: PropTypes.bool
}

export default withStyles(style)(BlockMixt)
