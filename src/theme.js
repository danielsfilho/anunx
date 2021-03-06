import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
    palette: {
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#ffffff'
        },
        background: {
            default: '#f2f4f5',
            white: '#ffffff'
        }, 
    },
})

export default theme