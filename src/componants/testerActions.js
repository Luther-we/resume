const ROOT = 'TESTER'
export const MOUNT_STATE = `${ROOT}/MOUNT_STATE`

export const mountState = () => dispatch => {
  console.log('yes')
  dispatch({
    type: MOUNT_STATE
  })
}