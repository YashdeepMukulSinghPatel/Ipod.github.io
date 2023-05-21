import React from 'react';
import artistImage from './assets/images/Yashdeep.jpg';

class Artists extends React.Component{
    
    render(){
        return(
            <div style={styles.artistsContainer}>
                <div style={styles.info}>
                    <div style={styles.imageContainer}>
                    </div>
                    
                    <div style={styles.subInfo}>
                        <h4 style={{marginBottom:'0.3rem'}}>IPod.js <span><img style={styles.image} src="https://cdn3d.iconscout.com/3d/premium/thumb/profile-6073860-4996977.png" /></span></h4>
                        <p style={{marginBottom:'0'}}>✾ React Project ✾</p>
                        <p>꧁༺🅼🅰🅳🅴ㅤ🅱🆈ㅤ:ㅤ🆈🅰🆂🅷🅳🅴🅴🅿༻꧂</p>
                    </div>
                </div>
                <div style={styles.info2}>
                <h5 style={{alignSelf : 'center'}}>Thanks for visiting the app<img src="https://media.tenor.com/3PFmYr6NEXsAAAAj/kuromi-thank-you.gif" width='50px' height='50px' ></img></h5>
                   </div> 
            </div>
        );
    }
    
}

const styles = {
    artistsContainer : {
        height : '78%',
        width : '100%',
        display : 'flex',
        flexDirection : 'column',
    },
    imageContainer : {
        height : '65%',
        width : '35%',
        borderRadius : '50%',
        backgroundImage : `url(${artistImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        alignSelf : 'center'
    },
    image : {
        width: '2rem',
        height : '2rem'
    },
    info : {
        height : '70%',
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-evenly'
    },
    info2 : {
        width : '100%',
        height : '30%',
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'center'
    },
    subInfo : {
        alignSelf : 'center'
    },
    titleBar : {
        height:'10%',
        width:'100%',
        borderRadius:'12px 0 0 0',
        backgroundImage: 'linear-gradient(0deg, rgb(123, 132, 140), transparent)',
        borderBottom: '1px solid #6c757d',
        padding : '1px 5px 10px 8px',
        display:'flex',
        flexDirecton : 'row',
        justifyContent : 'space-between'

    },
    battery :{
        width : '20px',
        height: '20px',
    }
}

export default Artists;
