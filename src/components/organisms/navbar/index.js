import React, { useContext, useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Grid,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
} from "@material-ui/core";

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Avatar } from "../../atoms";
import { UserContext } from "../../../context";
import "./navbar.scss";

const useStyles = makeStyles((theme) => ({
  principal: {
    color: "#464F6D",
    background: "#F2F2F2",
  },
  button: {
    background: "#464F6D",
    color: "#F5F5F5",
    textAlign: "right",
    width: 16,
    height: 68,
  },
  logo: {
    textAlign: "left",
  },
  four: {
    marginRight: theme.spacing(0.2),
    padding: 30,
    textAlign: "right",
    font: "Open Sans",
    color: "#4E5674",
  },
}));

const MyProfileButton = ({ name, avatar, lastname }) => (
  <Link to="/my-profile">
    <div className="go-to-profile-button">
      <Avatar width={44} height={44} src={avatar} alt={`${name} ${lastname}`} />
      <div className="user-info-container">
        <label>{name}</label>
        <label>Ver mi perfil</label>
      </div>
    </div>
  </Link>
);

export const Navbar = () => {
  const [open, setOpen] = useState(-1);
  const anchorRef = useRef(null);
  const anchorReff = useRef(null);

  const { isUserLogged, ...user } = useContext(UserContext);

  const handleClose = (event) => {
    const isInsideMenu = [anchorRef, anchorReff].some(
      (ref) => ref && ref.current.contains(event.target)
    );

    if (isInsideMenu) return;
    setOpen(-1);
  };

  function handleListKeyDown(event) {
    const closeTabs = ["Tab", "Esc"];
    if (closeTabs.includes(event.key)) {
      setOpen(-1);
    }
  }

  const classes = useStyles();
  return (
    <div>
      <div>
        <AppBar position="static" className="principal">
          <Toolbar>
            <Grid container justifyContent="center" spacing={1}>
              <Grid item xs={3} className="logo-container">
                < Link to="/">
                  <Button
                    className="logo"
                  >
                    Logo
                  </Button>
                </Link>
              </Grid>

              <Grid container justifyContent="center" item xs={6}>
                <Link to="/about-us">
                  <Button
                    aria-controls={open ? "menu-list-grow" : undefined}
                    aria-haspopup="true"
                    className={classes.four}
                  >
                    ¿Quiénes somos?
                  </Button>
                </Link>

                <Link to="/mission-vision">
                  <Button
                    aria-controls={open ? "menu-list-grow" : undefined}
                    aria-haspopup="true"
                    className={classes.four}
                  >
                    Acerca de{" "}
                  </Button>
                </Link>

                <Link to="/faqs">
                  <Button
                    aria-controls={open ? "menu-list-grow" : undefined}
                    aria-haspopup="true"
                    className={classes.four}
                  >
                    FQA'S{" "}
                  </Button>
                </Link>

                {!isUserLogged && (
                  <Link to="/login">
                    <Button
                      aria-controls={open ? "menu-list-grow" : undefined}
                      aria-haspopup="true"
                      className={classes.four}
                    >
                      Login
                    </Button>
                  </Link>
                )}
              </Grid>
              <Grid item xs={2} className="singUpButton">
                {isUserLogged ? (
                  <MyProfileButton {...user} />
                ) : (
                  <Link to="/register">
                    <Button className="singUp">Register</Button>
                  </Link>
                )}
              </Grid>
              <Grid item xs={1} className="singUpButton">
                <Button className="btnIconMessage"> 
                  <ExitToAppIcon className="IconExit"/>
                </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
      <div>
        <Popper
          open={open === 1}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={1}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                    className="menu"
                  >
                    <MenuItem onClick={handleClose}>Ejemplo 1</MenuItem>
                    <MenuItem onClick={handleClose}>Ejemplo 2</MenuItem>
                    <MenuItem onClick={handleClose}>Ejemplo 3</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
        <Popper
          open={open === 2}
          anchorEl={anchorReff.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={2}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                    className="menu"
                  >
                    <MenuItem onClick={handleClose}>Ejemplo 4</MenuItem>
                    <MenuItem onClick={handleClose}>Ejemplo 5</MenuItem>
                    <MenuItem onClick={handleClose}>Ejemplo 6</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
};

//Falta arreglar la letra de los botones porque no es la misma fuente ni el mismo color
