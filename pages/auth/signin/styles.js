import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    formContainer: {
        marginTop: 80,
    },
    btnRegister: {
        width: '100%',
        marginTop: 40,
        marginBottom: 10,
    },
    toLogin: {
        cursor: 'Pointer',
    },
    loading: {
        display: 'block',
        margin: '10px auto',
    },
    errorMessage: {
        margin: '20px 0',
    },
    orSeparator: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e8e8e8',
        width: '100%',
        height: 1,
        margin: theme.spacing(7, 0, 4),

        '& span': {
            backgroundColor: 'white',
            padding: '0 30px',
        }
    },
}))

export default useStyles