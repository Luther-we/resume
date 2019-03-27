import * as actions from './testerActions'

const localState = {
  test: 'je suis la première réf',
  exemple: 'test'
}

const testerReducer = (state = localState, action) => {
  switch (action.type) {
    case actions.MOUNT_STATE :
      console.log('yes again')
      return {...localState}
    default :
      return state
  }
}

export default testerReducer