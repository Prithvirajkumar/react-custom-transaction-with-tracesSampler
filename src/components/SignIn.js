import * as React from "react";
import * as Sentry from "@sentry/browser";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function SignIn() {
  const [userName, setUserName] = React.useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userName);
    if (userName === "Prithvi") {
      Sentry.setTag("userName", userName);
      throw new Error("Prithvi breaks the code");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Enter Your User Name"
            name="name"
            autoComplete="name"
            autoFocus
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={handleSubmit}
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
