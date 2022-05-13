import {
    Avatar,
    Box,
    Card,
    CardHeader,
    CardMedia,
    Chip,
    Container,
    Grid,
    Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'

import TemplateDefault from '../src/templates/Default'


const useStyles = makeStyles((theme) => ({
    box: {
        backgroundColor: theme.palette.background.white,
        padding: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    productName: {
        margin: '15px 0',
    },
    price: {
        fontWeight: 'bold',
        marginBottom: 15,
    },
    card: {
        height: '100%'
    },
    CardMedia: {
        paddingTop: '56%',
    },
}))

const Product = () => {
    const classes = useStyles()
    
    return(
        <TemplateDefault>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <Box className={classes.box}>
                            <Carousel
                                autoPlay={false}
                                animation="slide"
                                navButtonsAlwaysVisible={true}
                                navButtonsProps={{
                                    style: {
                                        color: 'white'
                                    }
                                }}
                            >
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.CardMedia}
                                        image="http://source.unsplash.com/random?a=1"
                                        title="Título da imagem"
                                    />
                                </Card>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.CardMedia}
                                        image="http://source.unsplash.com/random?a=2"
                                        title="Título da imagem"
                                    />
                                </Card>
                            </Carousel>
                        </Box>
                        <Box className={classes.box} textAlign="left">
                            <Typography component="span" variant="caption">Publicado 13 maio de 2022</Typography>
                            <Typography component="h4" variant="h4" className={classes.productName}>Jaguar XE 2.0 D R-Sport Aut.</Typography>
                            <Typography component="h4" variant="h4" className={classes.price}>R$ 55.900,00</Typography>
                            <Chip label="Categoria" />
                        </Box>

                        <Box className={classes.box} textAlign="left">
                            <Typography component="h6" variant="h6">Descrição</Typography>
                            <Typography component="p" variant="body2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={4}>
                        <Card elevation={0} className={classes.box}>
                            <CardHeader 
                                avatar={
                                    <Avatar>D</Avatar>
                                }
                                title="Daniel da Silva Filho"
                                subheader="danielbrumdasilva@gmail.com"
                            />
                            <CardMedia
                                image="http://source.unsplash.com/random"
                                title="Daniel da Silva Filho"
                            />
                        </Card>
                        <Box className={classes.box}>
                            <Typography component="h6" variant="h6">
                                Localização
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </TemplateDefault>
    )
}

export default Product