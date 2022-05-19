import { Formik } from 'formik'
import axios from 'axios'
import { useRouter } from 'next/router'

import {
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

import TemplateDefault from '../../../src/templates/Default'
import { initialValues, validationSchema } from '../../auth/signup/formValues'
import useToasty from '../../../src/contexts/Toasty'
import useStyles from '../../auth/signup/styles'

const Signup = () => {
    const classes = useStyles()
    const router = useRouter()
    const { setToasty } = useToasty()

    const handleFormSubmit = async values => {
        const response = await axios.post('/api/users', values)

        if (response.data.success) {
            setToasty({
                open: true,
                severity: 'success',
                text: 'Cadastro realizado com sucesso!'
            })

            router.push('/auth/signin')

        }
    }

    return(
        <TemplateDefault>
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
                                <Container textAlign='center' maxWidth="md" className=''>
                                    <Typography component='h1' variant='h2' align='center'>
                                        Crie sua conta
                                    </Typography>
                                    <Typography component='h2' variant='h5' align='center'>
                                        E anuncie para todo o Brasil
                                    </Typography>
                                </Container>

                                <Container maxWidth="md" className={classes.formContainer}>
                                    <FormControl error={errors.name && touched.name}fullWidth>
                                        <InputLabel>
                                            Nome
                                        </InputLabel>
                                        <Input 
                                            name="name"
                                            value={values.name}
                                            onChange={handleChange}
                                        />
                                        <FormHelperText>
                                            {
                                                errors.name && touched.name
                                                ? errors.name
                                                : null
                                            }
                                        </FormHelperText>
                                    </FormControl>
                                    <br /><br />

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

                                    <FormControl fullWidth error={errors.passwordConfirmation && touched.passwordConfirmation}>
                                        <InputLabel>
                                            Confirmação de senha
                                        </InputLabel>
                                        <Input
                                            type="password"
                                            name="passwordConfirmation"
                                            value={values.passwordConfirmation}
                                            onChange={handleChange}
                                        />
                                        <FormHelperText>
                                            {
                                                errors.passwordConfirmation
                                                ? errors.passwordConfirmation
                                                : null
                                            }
                                        </FormHelperText>
                                    </FormControl>
                                    
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
                                                CADASTRAR
                                            </Button>
                                            )
                                    }
                                    

                                    <Typography>
                                        <Link href="#" className={classes.toLogin}>
                                            Já tem uma conta? Entre aqui
                                        </Link>
                                    </Typography>
                                </Container>
                            </form>
                        )
                    }
                }
                
            </Formik>
        </TemplateDefault>
    )
}

export default Signup