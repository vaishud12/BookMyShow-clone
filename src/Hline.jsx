import React from 'react';
import { Grid } from '@material-ui/core'
import logo from './image/bms.png'

const Hline = () => {

    return (
        <div >
            <Grid item container>
                <Grid xs={1} />
                <Grid item xs={4}>
                    <hr
                        style={{
                            marginTop: '50px',
                            color: '#c5c5c5',
                        }}
                    />
                </Grid>
                <Grid item xs={2}>
                    <img style={{paddingLeft:'15px'}} src={logo} />
                </Grid>
                <Grid item xs={4}>
                    <hr
                        style={{
                            marginTop: '50px',
                            color: '#c5c5c5',
                        }}
                    />
                </Grid>
                <Grid xs={1}/>
            </Grid>
            <center><font size="5" color="red"><h1>website clone: Developed by vaishnavi Devardekar</h1></font></center>
        </div>
    );
}
export default Hline;