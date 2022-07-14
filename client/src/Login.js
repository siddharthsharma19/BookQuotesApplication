import { useState, useEffect } from "react";
import { login } from "./methods/actions";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Box } from "@mui/material";
import Button from '@mui/material/Button';

export const Login = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [disabledFlag, setDisabledFlag] = useState(true);
  const cookies = new Cookies();

  const navigate = useNavigate();

  const handleEmailChange = (input) => {
    setemail(input.target.value);
  };

  const handlePasswordChange = (input) => {
    setPassword(input.target.value);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    login(email, password).then((response) => {
      if (response.status === 200) {
        cookies.set("token", response.data.token, { maxAge: 3600 });
      }
      navigate("/home");
    });
  };

  useEffect(() => {
    setDisabledFlag(false);
    if (email === "" || password === "") {
      setDisabledFlag(true);
    }
  }, [email, password]);

  
//   const theme=createTheme();
//   theme.typography.h3={
//     fontSize: '1.2rem',
    
//   '@media (min-width:600px)': {
//     fontSize: '1.5rem',
//   },
//   [theme.breakpoints.up('md')]: {
//     fontSize: '2.4rem',
//   },
// };

  return (
    <>
    <Box align="center" style={{ display:'flex',justifyContent:'space-evenly', minHeight: '100vh'}}>
    
    <Grid  container
    spacing={0}
    align="center"
    justify="cente"
    direction="column"
    justifyContent="center"
    margin={5}
    style={{width:500, maxHeight: '100vh'}}>
             <div className="login-header">
      <Typography component="h1" variant="h3" color="primary" >Login</Typography>
          </div>
          
          
            <form className="login-form">
              <div>
                
                <TextField
              margin="normal"
              variant="outlined"
               size="small"
              required
             type="text"
              id="email"
              label="EMail"
              name="email"
              autoComplete="email"
              onChange={handleEmailChange}
              
              autoFocus
            />           
                
                <br />
                <TextField
              margin="normal"
              required
              variant="outlined"
               size="small"
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={handlePasswordChange}
              autoComplete="current-password"
            />
                
               
                <br />
                <Button
             
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={disabledFlag}
              onClick={handleLoginSubmit}           >
                
                  Login
                  </Button>
              </div>
            </form>
            </Grid>
          {/* <img src={"/assets/welcome-img.jpg"} style={{width:550,height:400}}/> */}
          
    </Box>
    </>
  );
};