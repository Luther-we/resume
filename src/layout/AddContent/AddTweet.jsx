/* eslint-disable semi,comma-dangle */
import React, { PureComponent } from 'react'
import { Field } from 'redux-form'

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
            style={{width: '300px'}}
          />
        <br/>
          <Field
            label='Contenu'
            name='contenu'
            defaultValue='Hello '
            multiline
            rowsMax='4'
            style={{width: '300px'}}
          />
      </>
    )
  }
}

export default AddTweet
