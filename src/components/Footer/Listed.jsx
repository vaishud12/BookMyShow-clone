import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../CSS/Listed.css'
import { MdFiberNew }from 'react-icons/md';
import Hline from "../../Hline"



const useStyles = makeStyles((theme) => ({
    tagg: {
        color: 'red',
    }
}));

const Listed = () => {
    const classes = useStyles();


    return (
        <div className='footerlinks'>
            <div className="main-content">
                <div className="content" >
                    <p className="main-head">BEST LANGUAGE GENRE MOVIES</p><br />
                    <p>Hindi Comedy Movies | Hindi Action Movies |</p>
                    <p>English Animated Movies | English Fantasy Movies |</p>
                    <p>English Action Movies | Tamil Action Movies |</p>
                    <p>Gujrati Comedy Movies | Marathi Drama Movies |</p>
                    <p>Marathi Comedy Movies | Hindi Animated Movies</p>
                </div>
                <div className="content" >
                    <p className="main-head">MOVIES BY GENRE</p><br />
                    <p>Best Action Movies | Best Romantic Movies |</p>
                    <p>Best Comedy Movies | Best Adult Movies |</p>
                    <p>Best Adventure Movies | Best Biography Movies |</p>
                    <p>Best Drama Movies | Best Family Movies |</p>
                    <p>Best Musical Movies | Best Mystry Movies |</p>
                    <p>Best Sci-Fi Movies | Best Suspense Movie |</p>
                    
                </div>
                <div className="content" >
                    <p className="main-head">POPULAR MOVIES BY LANGUAGE</p><br />
                    <p>Popular Hindi Movies | Popular Engish Movies |</p>
                    <p>Popular Marathi Movies | Popular Bengali Movies |</p>
                    <p>Popular Tamil Movies | Popular Telugu Movies |</p>
                    <p>Popular Kannada Movies | Best Punjabi Movies |</p>
                    <p>Popular Gujrati Movies | Best Sindhi Movies</p>
                </div>
                
                <div className="content" >
                    <p className="main-head">THINGS TO DO IN RAEBARELI</p><br />
                    <p>Adventure Activities in Raebareli |</p>
                    <p>Food Events in Raebareli | Family Tours in Raebareli |</p>
                    
                    <p>Gaming Events in Raebareli | Nightlife in Raebareli |</p>
                    <p>Places To Visit in Raebareli | Tourist Activities In Raebareli</p>
                </div>
                <div className="content" >
                    <p className="main-head">EVENTS TICKETS BOOKING ONLINE</p><br />
                    <p>Upcoming Events in Mumabi | Upcoming Events in Delhi |</p>
                    <p>Upcoming Events in Bengaluru |</p>
                    
                    <p>Upcoming Events in Hyderabad | Upcoming Events in Pune |</p>
                    <p>Upcoming Events in Noida | Upcoming Events in Ahmedabad</p>
                </div>
                <div className="content" >
                    <p className="main-head">MOVIES, CINEMAS & CELEBRITY</p><br />
                    <p>Latest Upcoming Movies | Best Now Showing |</p>
                    <p>Cinemas & Threatres | Movie Stars |</p>
                    <p>Cinema Chains | All regions Cinemas</p>
                </div>
                <div className="content" >
                    <p className="main-head">COUNTRIES</p><br />
                    <p>Indonesia | Singapore | UAE |</p>
                    <p>Sri Lanka | West Indies</p>
                </div>
                <div className="content" >
                    <p className="main-head">BOOKMYSHOW APP</p><br />
                    <p>BMS Ticketing iOS App |</p>
                    <p>BMS Ticketing Android App</p>
                </div>
                
                <div className="content" >
                    <p className="main-head">EXCLUSIVES</p><br />
                    <p>
                        <span>Superstar</span>
                        <MdFiberNew className={classes.tagg} /> |
                    </p>
                    
                    <p>Watch Guide
                        <MdFiberNew className={classes.tagg} />
                    </p>

                </div>
                
            </div>
            <Hline/>
            
        </div>
    );
}

export default Listed;