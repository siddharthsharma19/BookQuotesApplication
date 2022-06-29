import { Box, Button, Grid, TextField, Typography } from "@mui/material"
import {createTheme, ThemeProvider} from "@mui/material/styles"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { addbook } from "./methods/actions"

export const AddBook = () => {
    const [bookName, setBookName] = useState("")
    const [author, setAuthorName] = useState("")
    const [disabledFlag, setDisabledFlag] = useState(false)

    const navigate = useNavigate()

    const handleNameChange = (input) => {
        setBookName(input.target.value)
    }

    const handleAuthorChange = (input) => {
        setAuthorName(input.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        console.log(bookName)
        console.log(author)
        addbook(bookName, author).then((response) => {
            if (response.status === 200) {
                navigate("/home")
            } else {
                alert("Failed to add book")
            }
        })
    }

    useEffect(() => {
        setDisabledFlag(false)
        if (bookName === "" || author === "") {
            setDisabledFlag(false)
        }
    }, [bookName, author]);

    const theme=createTheme();
    theme.typography.h3={
        fontSize: '1.2rem',
            
        '@media (min-width:600px)': {
            fontSize: '1.5rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2.4rem',
        },
    }

    return (
        <>
        <Box align="center" width="40%" height="40%" backgroundColor="primary.main" style={{ display:'flex',justifyContent:'space-evenly', minHeight: '100vh'}}>
    <ThemeProvider theme={theme} >
    
    <Grid  container spacing={0} align="center" justify="cente" direction="column" justifyContent="center" backgroundColor="white" margin={5} style={{width:500, maxHeight: '100vh'}}>
      {<Box sx={{backgroundColor:"white"}}>

      </Box> }
             <div className="login-header">
            <ThemeProvider theme={theme}>
      <Typography component="h1" variant="h3" color="primary" >Add Book</Typography>
        </ThemeProvider>         
          </div>
          
          
            <form className="login-form">
              <div>
                
                <TextField
              margin="normal"
              variant="outlined"
               size="small"
              required
             type="text"
              id="title"
              label="Book Title"
              name="booktitle"
              onChange={handleNameChange}
              style={{width:'80%'}}
              autoFocus
            />           
                
                <br />
                <TextField
              margin="normal"
              required
              variant="outlined"
               size="small"
              name="author"
              label="Author Name"
              type="text"
              id="author"
              style={{width:'80%'}}
              onChange={handleAuthorChange}
            />
                
               
                <br />
                <Button
             
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={disabledFlag}
              onClick={handleFormSubmit}           >
                
                  Submit
                  </Button>
              </div>
            </form>
            </Grid>
          </ThemeProvider>
          {/* <img src={"/assets/welcome-img.jpg"} style={{width:550,height:400}}/> */}
          
    </Box>
        </>
    )
}