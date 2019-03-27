
import { combineReducers } from 'redux'
import testerReducer from '../../componants/testerReducer'
import { reducer as reduxFormReducer } from 'redux-form'

export default combineReducers({
  tester: testerReducer,
  form: reduxFormReducer
})