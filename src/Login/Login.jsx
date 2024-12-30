import { ThemeProvider } from "styled-components";
import { AuthUser } from "../AppRouter";
import { useContext, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
  createTheme,
  keyframes,
} from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const defaultTheme = createTheme();

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const buttonHover = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const Login = () => {
  const { login } = useContext(AuthUser);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container
          component="main"
          maxWidth="xs"
          sx={{
            backgroundColor: "linear-gradient(to bottom right, #6a11cb, #2575fc)",
            borderRadius: "16px",
            boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
            padding: "24px",
            marginTop: "25px",
            animation: `${fadeIn} 1s ease-in-out`,
            alignItems: "center"
          }}
        >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              animation: `${fadeIn} 1.5s ease-in-out`,
            }}
          >
            <Avatar
              sx={{
                m: 1,
                bgcolor: "white",
                animation: `${fadeIn} 2s ease-in-out`,
              }}
            >
              <LockOutlinedIcon
                sx={{
                  color: "#6a11cb",
                  fontSize: "32px",
                }}
              />
            </Avatar>
            <Typography
              component="h1"
              variant="h5"
              sx={{
                fontWeight: "bold",
                color: " #dd2476",
                marginBottom: "16px",
                // textShadow: "0 2px 4px rgba(0,0,0,0.4)",
              }}
            >
              Welcome Back!
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{
                mt: 1,
                width: "100%",
                "& .MuiTextField-root": {
                  background: "white",
                  borderRadius: "8px",
                  marginBottom: "16px",
                  "& input": {
                    padding: "10px",
                  },
                },
              }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                type="name"
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  borderRadius: "25px",
                  fontSize: "16px",
                  padding: "10px",
                  textTransform: "capitalize",
                  background: "linear-gradient(to right, #ff512f, #dd2476)",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                  animation: `${fadeIn} 2.5s ease-in-out`,
                  "&:hover": {
                    animation: `${buttonHover} 0.6s ease-in-out infinite`,
                    background: "linear-gradient(to right, #dd2476, #ff512f)",
                  },
                }}
              >
                Log In
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Login;
