import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import cw from "../assets/cw.jpeg";
import brianicon from "../assets/brianicon.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { logOut } from "../helpers/firebase";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseRegister = () => {
    setAnchorEl(null);
    navigate("register");
  };
  const handleCloseLogin = () => {
    setAnchorEl(null);
    navigate("login");
  };
  const handleCloseSignOut = () => {
    setAnchorEl(null);
    logOut(navigate);
  };
  const handleCloseProfile = () => {
    setAnchorEl(null);

    navigate("profile");
  };
  const handleCloseNew = () => {
    navigate("new-blog");
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", backgroundColor:"#7BA69E" }}>
          <Typography variant="h6" component="div">
            <Link to="/">
              <img src={brianicon} alt="" style={{ height: "90px" }} />
            </Link>
          </Typography>

          {currentUser ? (
            <Typography
              variant="p"
              onClick={() => navigate("/")}
              style={{ cursor: "pointer"}}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <h1 className="line-through bg-success">
                <span>&lt;BrianKane /&gt; Blog</span>
              </h1>
            </Typography>
          ) : (
            <Typography
              variant="p"
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
            >
              <h2 className="line-through bg-success">
                <span>──── &lt;BrianKane /&gt;Blog ────</span>
              </h2>
            </Typography>
          )}

          <div>
            <span
              style={{
                position: "absolute",
                right: "70px",
                top: "40px",
                cursor: "pointer",
              }}
              onClick={() => navigate("profile")}
            >
              {currentUser.email}
            </span>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
         
              
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {currentUser ? (
                <div>
                  <MenuItem onClick={handleCloseProfile}>Profile</MenuItem>
                  <MenuItem onClick={handleCloseNew}>New</MenuItem>
                  <MenuItem onClick={() => navigate("/about")}>About </MenuItem>
                  <MenuItem onClick={handleCloseSignOut}>Logout </MenuItem>
                </div>
              ) : (
                <div>
                  <MenuItem onClick={handleCloseLogin}>Login</MenuItem>
                  <MenuItem onClick={handleCloseRegister}>Register</MenuItem>
                </div>
              )}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
