import errors from './errors'
import notifications from './notifications'
import others from './others'
import inputs from './inputs'

const index = {
  errors: { ...errors },
  notifications: { ...notifications },
  others: { ...others },
  inputs: { ...inputs }
}

export default index