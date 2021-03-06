import React from "react";
import { Typography, Box, Button } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import './Home.css';
import TabPostagem from "../../components/Postagens/TabPostagem/TabPostagem";

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="box">
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h4" align="center" className="title" >Seja bem vinde!!!</Typography>
                        <Typography variant="h6" gutterBottom color="textSecondary" component="h6" align="center" className="title">Tudo sobre essa gata serelepe e suas aventuras</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}></Box>
                        <br></br>
                        <Button variant="outlined" className="botton" > Ver Postagens</Button>
                    </Box>
                        <br></br>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://imgur.com/a/H0EajN9" alt="" width="100%" height="100%" />
                </Grid>
                <Grid xs={12} className='posts'>
                    <TabPostagem/>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;