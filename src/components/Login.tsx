import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import axios from "axios";
import PopUp from "./PopUp";
import { useHistory } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function SignInSide(props: any) {
  const history = useHistory();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [blank, setBlank] = useState<boolean>(true);
  const [messagepop, setMessagepop] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("Incorrect password");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (email.trim() != "" || password.trim() != "") {
      event.preventDefault();
      setBlank(false);
    } else {
      event.preventDefault();
      setBlank(true);
      setMessagepop(true);
      setMessage("Please enter a valid email address or password");
    }
    if (!blank) {
      axios
        .post("http://localhost:8000/auth/login", {
          email: email,
          password: password,
        })
        .then(
          (response) => {
            if (response.data.response == "correct") {
              localStorage.setItem("token", response.data.token);
              localStorage.setItem("displayName", response.data.displayName);
              localStorage.setItem("email", email);
              localStorage.setItem("logged", "true");
              props.setLogged(true);
              history.push("/home");
            } else {
              setMessagepop(true);
              console.log(messagepop);
            }
          },
          (error) => {
            console.log(error);
          }
        );
    }
  };

  const emailInputChange = (event: any) => {
    setEmail(event.target.value);
  };
  const passwordInputChange = (event: any) => {
    setPassword(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      {messagepop && (
        <PopUp open={messagepop} setOpen={setMessagepop} text={message} />
      )}
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/08/24/14/working-out-gym.jpg?quality=75&width=1200&auto=webp)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          style={{ backgroundColor: "#2f334a" }}
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <br />
            <br />
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <br />
            <Typography component="h1" variant="h5" style={{ color: "white" }}>
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={emailInputChange}
                value={email}
                autoFocus
                sx={{ "& label": { color: "white" } }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                onChange={passwordInputChange}
                value={password}
                id="password"
                autoComplete="current-password"
                sx={{ "& label": { color: "white" } }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{ backgroundColor: "8761E6" }}
              >
                Sign In
              </Button>
              <br />
              <br />
              <Grid container>
                <Grid item xs></Grid>
                <Grid item>
                  <Link href="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
