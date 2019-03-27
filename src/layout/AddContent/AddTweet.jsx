/* eslint-disable semi,comma-dangle */
import React, { PureComponent } from 'react'
import { Field } from 'redux-form'
import TextInput from '../../componants/inputs/TextInput'
import Paper from '@material-ui/core/Paper/Paper'

const style = {
  width: '300px'
}
// TODO : 'test'
// TODO: 'encore un test'
// FIXME: 'ça aussi'

class AddTweet extends PureComponent {
  render() {
    return (
      <>
          <Field
            label='Titre'
            name='title'
            // component={TextInput}
            style={{width: '300px'}}
          />
        <br/>
          <Field
            label='Contenu'
            name='contenu'
            defaultValue='Hello '
            // component={TextInput}
            multiline
            rowsMax='4'
            style={{width: '300px'}}
          />
      </>
    )
  }
}

export default AddTweet
