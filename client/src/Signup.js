import { useEffect, useState } from "react";
import { signUp } from "./methods/actions";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Signup = () => {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [disabledFlag, setDisabledFlag] = useState(true);
  const [isLoading, setisLoading] = useState(false);

  let passwordMatch = password === confirmPassword ? true : false;

  const handleNameChange = (input) => {
    setName(input.target.value);
  };

  const handleUserNameChange = (input) => {
    setUserName(input.target.value);
  };
  const handleEmailChange = (input) => {
    setEmail(input.target.value);
  };
  
  const handlePasswordChange = (input) => {
    setPassword(input.target.value);
  };

  const handleConfirmPasswordChange = (input) => {
    setConfirmPassword(input.target.value);
  };

  useEffect(() => {
    passwordMatch = password === confirmPassword ? true : false;

    setDisabledFlag(false);
    if (
      name === "" ||
      username === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setDisabledFlag(true);
    }
  }, [name, username, email, password, confirmPassword, disabledFlag]);

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    setisLoading(true);
    if (!passwordMatch) {
      alert("Password and current password not matched");
    }
    else{
        signUp(email, password, name, username)
        .then((statusCode)=>{
            if(statusCode===200){
              window.location.reload();
            } 
            else{
              alert("error");
            }
        })
    }
  };

  return (
    // <Box align="center" style={{ display:'flex',justifyContent:'space-evenly', minHeight: '70vh', maxHeight:'100vh'}}>

     <Grid  container
    spacing={0}
    align="center"
    // justify="center"
    direction="column"
    justifyContent="center"
    style={{width:"100%", maxHeight: '100%'}}>
      <div className="login-page">
        <div className="form">
          <div className="login">
          <div className="login-header">
                 <Typography component="h1" variant="h3" color="primary"> Register</Typography>
                  {/* <Typography component="h1" variant="h4" color="#00a0dc"> Please enter your credentials to register.</Typography> */}
          
            </div>
            <form className="login-form">
              <div>
              <TextField
              margin="normal"
              variant="outlined"
               size="small"
              required
             
              id="name"
              label="name"
              autoComplete="name"
              value={name}
              onChange={handleNameChange}
             
              autoFocus
            />  
               <br/>

                <TextField
              margin="normal"
              variant="outlined"
               size="small"
              required
              type="text"
              id="username"
              label="username"
              autoComplete="username"
              value={username}
              onChange={handleUserNameChange}
              name="username"
            />  
                <br/>

                <TextField
              margin="normal"
              variant="outlined"
               size="small"
              required
              type="text"
              id="email"
              label="email"
              autoComplete="email"
              value={email}
              onChange={handleEmailChange}
              name="email"
            />  
            <br/>
               <TextField
              margin="normal"
              variant="outlined"
               size="small"
              required
              type="password"
              id="password"
              label="password"
              autoComplete="password"
              value={password}
              onChange={handlePasswordChange}
              name="password"
            />  
                <br/>

                <TextField
              margin="normal"
              variant="outlined"
               size="small"
              required
              type="password"
              id="confirmpassword"
              label="confirm password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              name="confirmpassword"
            /> 
                <br />
                <Button
              type="submit"
              
              variant="contained"
              disabled={disabledFlag}
              onClick={handleRegisterSubmit}
              sx={{ mt: 3, mb: 2 }}
            >
             {isLoading ? "Loading": "Sign Up"}
                
                  
                  </Button>
                
              </div>
            </form>
          </div>
        </div>
      </div>
      </Grid>
    // </Box>
  );
};

export { Signup };