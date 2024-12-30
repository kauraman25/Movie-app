import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { AuthUser } from "../AppRouter";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

function DrawerAppBar() {
  const navigate = useNavigate();
  const { logout } = useContext(AuthUser);

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <Box sx={{ display: "flex", marginBottom: "35px" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: "linear-gradient(90deg, #333, #555)" }}>
        <Toolbar>
          <Typography
            onClick={() => navigate("/home")}
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
              "&:hover": {
                textShadow: "0px 0px 10px rgba(255,255,255,0.8)",
              },
            }}
          >
            Movies
          </Typography>
          <Box>
            <Button onClick={() => navigate("/home")} sx={{ color: "#fff" }}>
              Home
            </Button>
            <Button onClick={() => navigate("/watchlist")} sx={{ color: "#fff" }}>
              Watchlist
            </Button>
            <Button onClick={handleLogout} sx={{ color: "#fff" }}>
              Log out
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;