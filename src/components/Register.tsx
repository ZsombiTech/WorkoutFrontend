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
import { useHistory } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function RegisterInSide(props: any) {
  const history = useHistory();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [blank, setBlank] = useState<boolean>(true);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (name != "" || email != "" || password != "") {
      event.preventDefault();
      setBlank(false);
    } else {
      setBlank(true);
    }

    if (!blank) {
      axios
        .post("http://localhost:8000/auth/register", {
          username: name,
          email: email,
          password: password,
        })
        .then(
          (response) => {
            if (response.data.response == "correct") {
              localStorage.setItem("token", response.data.token);
              localStorage.setItem("displayname", name);
              localStorage.setItem("email", email);
              props.setLogged(true);
              history.push("/home");
            } else {
              //setMessage(response.data.response);
            }
          },
          (error) => {
            console.log(error);
          }
        );
    }
  };
  const nameInputChange = (event: any) => {
    setName(event.target.value);
  };
  const emailInputChange = (event: any) => {
    setEmail(event.target.value);
  };
  const passwordInputChange = (event: any) => {
    setPassword(event.target.value);
  };
  return (
    <ThemeProvider theme={theme}>
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
              Register
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
                id="username"
                label="Display Name"
                name="username"
                onChange={nameInputChange}
                value={name}
                autoComplete="username"
                autoFocus
                sx={{ "& label": { color: "white" } }}
              />
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
                onChange={passwordInputChange}
                value={password}
                type="password"
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
                Sign Up
              </Button>
              <br />
              <br />
              <Grid container>
                <Grid item>
                  <Link href="/login" variant="body2">
                    {"Already have an account? Sign In"}
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
