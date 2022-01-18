import React from "react";
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import "./index.scss";


export const BookingMovil = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className='MainScreenBookingMovile'>
      <div className="GeneralHeaderOfBookingMovil">
        <p className="TextOfHeader">Reserva</p>
      </div>

      <div className="GeneralFormOfBookingMovil">

        <div className="FormName">
          <p className="TextOfNameOnForm">Diego López</p>
        </div>

        <div className="InsideForm">
          <form className="LabelForm">
            <label>Aula: </label>
            <label>2.1</label>
          </form>

          <form className="LabelForm">
            <label>Correo: </label>
            <label>diego.lopez@alumnos.uneatlantico.es</label>
          </form>

          <form className="LabelForm">
            <label>Hora de entrada: </label>
            <List component="nav" className="BtnList">
              <ListItem button onClick={handleClick}>
                <ListItemText primary="Horas" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={open} >
                <List component="div" disablePadding>
                  <ListItem button>
                    <ListItemText primary="8:00 - 9:00" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="9:00 - 10:00" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="10:00 - 11:00" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="11:00 - 12:00" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="12:00 - 13:00" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="13:00 - 14:00" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="14:00 - 15:00" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="15:00 - 16:00" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="16:00 - 17:00" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="17:00 - 18:00" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="19:00 - 20:00" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="20:00 - 21:00" />
                  </ListItem>
                </List>
              </Collapse>
            </List>
          </form>
          <form className="LabelForm">
            <label>Hora de salida: </label>
            <List component="nav" className="BtnList">
              <ListItem button onClick={handleClick}>
                <ListItemText primary="Horas" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={open} >
                <List component="div" disablePadding>
                  <ListItem button>
                    <ListItemText primary="8:00 - 9:00" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="9:00 - 10:00" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="10:00 - 11:00" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="11:00 - 12:00" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="12:00 - 13:00" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="13:00 - 14:00" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="14:00 - 15:00" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="15:00 - 16:00" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="16:00 - 17:00" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="17:00 - 18:00" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="19:00 - 20:00" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="20:00 - 21:00" />
                  </ListItem>
                </List>
              </Collapse>
            </List>
          </form>
        </div>

        <div className="BtnToBooking">
          <Button className="BtnReservar">Reservar</Button>
        </div>
      </div>
    </div>
  );
};








// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';

// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import Collapse from '@material-ui/core/Collapse';
// import ExpandLess from '@material-ui/icons/ExpandLess';
// import ExpandMore from '@material-ui/icons/ExpandMore';


// const useStyles = makeStyles((theme) => ({
//   root: {
    // width: '100%',
    // maxWidth: 260,
//   }
// }));

// export const BookingMovil = () => {
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(true);

//   const handleClick = () => {
//     setOpen(!open);
//   };

//   return (
//     <List component="nav" className={classes.root}>
//       <ListItem button onClick={handleClick}>
//         <ListItemText primary="Horas" />
//         {open ? <ExpandLess /> : <ExpandMore />}
//       </ListItem>
//       <Collapse in={open} >
//         <List component="div" disablePadding>
//           <ListItem button>
//             <ListItemText primary="9:00 - 10:00" />
//           </ListItem>
//           <ListItem button>
//             <ListItemText primary="10:00 - 11:00" />
//           </ListItem>
//           <ListItem button>
//             <ListItemText primary="11:00 - 12:00" />
//           </ListItem>
//         </List>
//       </Collapse>
//     </List>
//   );
// }
