import {Field, formValueSelector} from 'redux-form'
import {Button, Paper} from '@material-ui/core'
import React from 'react'
import Tab from '@material-ui/core/Tab/Tab'
import {Link} from 'react-router-dom'
import Typography from '@material-ui/core/Typography/Typography'
import AddTweet from './AddTweet'
import BlockUnit from '../../componants/block/BlockUnit'
import Tabs from '@material-ui/core/Tabs/Tabs'
import AppBar from '@material-ui/core/AppBar/AppBar'



const selector = formValueSelector('addContent')

const mapStateToProps = (state) => ({
    hasTypeValue: selector(state, 'title'),
    hasItemValue: selector(state, 'item')
  })


<Field
label='Title'
name='title'
component='select'
onChange={this.onChangeHandle}
>
<option></option>
<option value="article">Article</option>
<option value="tweet">Tweet</option>
<option value="mixte">Mixte</option>
<option value="badge">Badge</option>
<option value="img">Image</option>
</Field>



<Paper>
  <Field
    label='Item'
    name='item'
    component={renderSelectField}
    value={this.props.hasItemValue}
  >
    {element.map((item, index) => {
      return (
        <Tab value={item}>
          <Link to='/addtweet'>
            <Typography variant='h2'>{item}</Typography>
          </Link>
        </Tab>
      )
    })}
  </Field>
  <Paper/>
  {this.props.hasItemValue === "Tweet" && <AddTweet />}
  {this.props.hasItemValue === 0 && <BlockUnit/>}
  {this.props.hasItemValue === 1 && <Button>Item Two</Button>}
  {this.props.hasItemValue === 2 && <Button>Item Three</Button>}

  {this.props.hasTypeValue}
  {this.props.hasItemValue}


  const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => {
  console.log(input)
  return (
  <Tabs
  value={input.value}
  {...input}
  onChange={(event, value) => input.onChange(value)}
  children={children}
  {...custom}
  />
  )
}


  const AppFor = (props) => {
  return (
  <AppBar position="static">
  <Tabs value={props.value} onChange={props.handleChange()}>
  {/*<Tab label="Item One" />*/}
  {/*<Tab label="Item Two" />*/}
  {/*<Tab label="Item Three" />*/}
  </Tabs>
  </AppBar>
  )
}

  //<AddItemContent
//  category={this.state.category}
///>



// const promiseTest = new Promise(((resolve, reject) => {
//   axios.post('http://localhost:5000/add/Tweet', data, resolve, reject)
//   .then((dataIn) => {
//     const {status, statusText, data} = dataIn
//
//     if (status === 200) {
//       resolve(data)
//     }
//   })
//   .catch(e => {
//     console.log('no', e)
//     reject(e)
//   })
// }))