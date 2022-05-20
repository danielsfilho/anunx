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
                                        Entre na sua conta
                                    </Typography>
                                </Container>

                                <Container maxWidth="md" className={classes.formContainer}>
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