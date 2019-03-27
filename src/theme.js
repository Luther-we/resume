
/// MUI THEME
// All the following keys are optional.
// We try our best to provide a great default value.
import {createMuiTheme} from '@material-ui/core'
import pink from '@material-ui/core/colors/pink'
import red from '@material-ui/core/colors/red'

const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: pink,
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

export default theme