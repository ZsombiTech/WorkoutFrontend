import React, { useState } from "react";
import { styled, useTheme, makeStyles } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import { Link, useHistory } from "react-router-dom";
import ListItemText from "@mui/material/ListItemText";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  backgroundColor: "#2b2e43",
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft(props: any) {
  const history = useHistory();
  const [opened, setOpened] = useState<boolean>(false);

  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
    setOpened(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setOpened(false);
  };

  const handleLogOut = () => {
    localStorage.removeItem("displayname");
    localStorage.removeItem("displayName");
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    localStorage.removeItem("logged");
    localStorage.removeItem("user_id");
    props.setLogged(false);

    history.push("/login");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{ backgroundColor: "#2b2e43", border: "none" }}
      >
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <div>
            {!opened && (
              <Link to="/profilepage">
                <PersonIcon style={{ marginRight: "30px" }} />
              </Link>
            )}
            {!opened && <LogoutOutlinedIcon onClick={handleLogOut} />}
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          backgroundColor: "#2b2e43",
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon style={{ color: "white" }} />
            ) : (
              <ChevronRightIcon style={{ color: "white" }} />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List
          style={{
            backgroundColor: "#2b2e43",
            color: "#6B7093",
            marginTop: "3vw",
            display: "flex",
            flexDirection: "column",
            gap: "5rem",
            textAlign: "center",
          }}
        >
          {["Home", "Steps", "Calories", "Diet", "Timer"].map((text, index) => (
            <Link to={"/" + text}>
              <ListItem
                button
                key={text}
                style={{ textAlign: "center", fontSize: "10rem" }}
              >
                <ListItemText
                  primary={text}
                  style={{ textAlign: "center", fontSize: "10rem" }}
                />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <main></main>
    </Box>
  );
}
