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
    }
}))

export default useStyles