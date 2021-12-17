import React from "react";

import Grid from '@material-ui/core/Grid';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import "./index.scss";


export const Availability = () => {
  return (
    <div className='GeneralFloorTwo'>
      <div className='HeaderOfFloors'>
        <ArrowBackIosIcon className='IconToGoBack' />
        <div className='SpaceForTheTitleOfFloorTwo'>
          <h1 className='HeaderTextOfScreenFloor'>
            Planta 2 - Aula 2.1
          </h1>
        </div>
      </div>






      
      <Grid container className='GeneralSecondPart'>      
        <Grid item xs={7} className='GeneralStateOfTheRoom'>
          <div className='GeneralOfFirstLine'>
            <h3 className='TextOfFirstLine'>12:11 Viernes 17/12/2021</h3>
          </div>
          <div className='GeneralOfSecondLine'>
            <p className='TextOfSecondLine'>LIBRE</p>
          </div>
        </Grid>
        <Grid item xs={5} className='GeneralBooking'>
          <div className='TitleOfBooking'>          
            <h3>Hoy</h3>
          </div>
          <div className='BookingPart'>
            <p className='TextOfBooking'>¡Reserva ahora mismo!</p>
          </div>
        </Grid>
      </Grid>
    



      

    </div>
  );
};






// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));

// export default function CenteredGrid() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Grid container spacing={3}>
//         <Grid item xs={12}>
//           <Paper className={classes.paper}>xs=12</Paper>
//         </Grid>
//         <Grid item xs={6}>
//           <Paper className={classes.paper}>xs=6</Paper>
//         </Grid>
//         <Grid item xs={6}>
//           <Paper className={classes.paper}>xs=6</Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }
