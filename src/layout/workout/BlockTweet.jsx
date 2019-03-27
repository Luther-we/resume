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
  Divider,
} from '@material-ui/core'
import {
  ExpandMore as ExpandMoreIcon,
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  Info as InfoIcon,
} from '@material-ui/icons'
import * as PropTypes from 'prop-types'


const style = theme => ({
  root: {
    margin: theme.spacing.unit,
    width: '100%',
    flexWrap: 'wrap'
  },
  infoContainer: {
    display: 'flex',
  },
  info: {
    marginLeft: 'auto',
  },
})

class BlockTweet extends PureComponent {
  render() {
    const {
      classes,
      title,
      description,
      category,
      publicationDate,
      share,
      like,
      expand,
      info,
    } = this.props
    return (
      <Grid container item>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image="/img-placeholder.png"
            title="Paella dish"
          />

          <CardContent>
            <Typography variant="h6">{title}</Typography>
            <Typography variant="overline">#{category}</Typography>
            <Typography variant="h5">
              {description}
            </Typography>
            <Typography variant="overline">
              {publicationDate}</Typography>
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

BlockTweet.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.string,
  share: PropTypes.bool,
  like: PropTypes.bool,
  expand: PropTypes.bool,
  info: PropTypes.bool,
  classes: PropTypes.object,
  publicationDate: PropTypes.string,
}

BlockTweet.defaultProps = {
  title: 'Hello',
  description: 'C\'est ici que se place le texte dans cette typo. Un jour, il y aura un fond de couleur en plus !',
  category: 'none',
  share: false,
  like: false,
  expand: false,
  info: null,
  classes: {},
  publicationDate: '1111-11-11',
}

export default withStyles(style)(BlockTweet)
