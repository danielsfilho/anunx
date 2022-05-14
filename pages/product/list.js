import {
    Container,
    Grid,
    IconButton,
    InputBase,
    makeStyles,
    Paper,
    Typography
} from '@material-ui/core'

import SearchIcon from '@material-ui/icons/Search'
import TemplateDefault from '../../src/templates/Default'
import Card from '../../src/components/Card'

const useStyles = makeStyles((theme) => ({
    searchBox: {
        display: 'flex',
        padding: theme.spacing(0, 2),
    },
    cardGrid: {
        marginTop: 50,
        padding: "0 50px",
    },
}))

const List = () => {
    const classes = useStyles()

    return(
        <TemplateDefault>
            <Container maxWidth="lg">
                <Paper component="form" className={classes.searchBox}>
                    <InputBase 
                        placeholder="Ex.: Iphone 12 com garantia"
                        fullWidth                       
                    />
                    <IconButton type="submit" aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </Container>

            <Container maxWidth="lg" className={classes.cardGrid}>
                <Typography component="h2" variant="h6" color="textPrimary">
                    Anúncios
                </Typography>
                <Typography component="p" variant="body2" color="textPrimary">
                    ENCONTRADOS 200 ANÚNCIOS
                </Typography>
                <br />
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card 
                            image={'http://source.unsplash.com/random'}
                            title="Produto X"
                            subtitle="R$ 59,90"
                        />
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card 
                            image={'http://source.unsplash.com/random'}
                            title="Produto X"
                            subtitle="R$ 59,90"
                        />
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card 
                            image={'http://source.unsplash.com/random'}
                            title="Produto X"
                            subtitle="R$ 59,90"
                        />
                    </Grid>
                </Grid>
            </Container>

        </TemplateDefault>
    )
}

export default List