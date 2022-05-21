import Image from 'next/image'
import { Formik } from 'formik'
import axios from 'axios'
import { useRouter } from 'next/router'
import { signIn, useSession } from 'next-auth/client'

import {
    Box,
    Button,
    CircularProgress,
    Container,
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    Link,
    Typography
} from '@material-ui/core'

import Alert from '@material-ui/lab/Alert'
import TemplateDefault from '../../../src/templates/Default'
import { initialValues, validationSchema } from './formValues'
import useToasty from '../../../src/contexts/Toasty'
import useStyles from '../signin/styles'

const Signin = ({ APP_URL }) => {
    const classes = useStyles()
    const router = useRouter()
    const { setToasty } = useToasty()
    const [ session ] = useSession()

    console.log(session)

    const handleGoogleLogin = () => {
        signIn('google', {
            callbackUrl: `${APP_URL}/user/dashboard`
        })
    }

    const handleFormSubmit = async values => {
        signIn('credentials',{
            email: values.email,
            password: values.password,
            callbackUrl: `${APP_URL}/user/dashboard`,
        })
    }

    return(
        <TemplateDefault>
            <Container textAlign='center' maxWidth="md" className=''>
                <Typography component='h1' variant='h2' align='center'>
                    Entre na sua conta
                </Typography>
            </Container>

            <Container maxWidth="md" className={classes.formContainer}>

                <Box display="flex" justifyContent="center">
                    <Button 
                        variant="contained"
                        color="primary"
                        startIcon={
                            <Image 
                                src="/images/logo_google.png"
                                width={20}
                                height={20}
                                alt="Login com Google"
                            />
                        }
                        onClick={handleGoogleLogin}
                    >
                        Entrar com Google
                    </Button>
                </Box>

                <Box className={classes.orSeparator}>
                    <span>ou</span>
                </Box>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleFormSubmit}
                >
                    {
                        ({
                            touched,
                            values,
                            errors,
                            handleChange,
                            handleSubmit,
                            isSubmitting,
                        }) =>{
                            return (
                                <form onSubmit={handleSubmit}> 
                                    {
                                        router.query.i === '1'
                                            ? (
                                                <Alert severity="error" className={classes.errorMessage}>
                                                    Usuário ou senha inválidos
                                                </Alert>
                                            )
                                            : null
                                    }                         

                                    
                                        <FormControl error={errors.email && touched.email} fullWidth>
                                            <InputLabel>
                                                E-mail
                                            </InputLabel>
                                            <Input 
                                                name="email"
                                                value={values.email}
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {
                                                    errors.email && touched.email
                                                    ? errors.email
                                                    : null
                                                }
                                            </FormHelperText>
                                        </FormControl>
                                        <br /><br />

                                        <FormControl error={errors.password && touched.password} fullWidth>
                                            <InputLabel>
                                                Senha
                                            </InputLabel>
                                            <Input
                                                type="password"
                                                name="password"
                                                value={values.password}
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {
                                                    errors.password && touched.password
                                                    ? errors.password
                                                    : null
                                                }
                                            </FormHelperText>
                                        </FormControl>
                                        <br /><br />
                                        
                                        {
                                            isSubmitting
                                                ? (
                                                    <CircularProgress className={classes.loading}/>
                                                ) : (
                                                <Button 
                                                    type="submit" 
                                                    fullwidth 
                                                    className={classes.btnRegister} 
                                                    variant="contained"
                                                    color="primary"
                                                    >
                                                    Entrar
                                                </Button>
                                                )
                                        }
                                        

                                        <Typography>
                                            <Link href="#" className={classes.toLogin}>
                                                Já tem uma conta? Entre aqui
                                            </Link>
                                        </Typography>
                                </form>
                            )
                        }
                    }
                    
                </Formik>
            </Container>
        </TemplateDefault>
    )
}

Signin.getInitialProps = async function() {
    return {
        APP_URL: process.env.APP_URL
    }
}

export default Signin