import { Box, Button, Grid, TextField, Typography } from "@mui/material"
import {createTheme, ThemeProvider} from "@mui/material/styles"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { addquote } from "./methods/actions"

export const AddQuote = () => {
    const [quote, setQuote] = useState("")
    const params = useParams();
    const bookid = params.id
    // const [bookName, setBookName] = useState("")
    const [disabledFlag, setDisabledFlag] = useState(false)

    const navigate = useNavigate()

    // const handleNameChange = (input) => {
    //     setBookName(input.target.value)
    // }

    const handleQuote = (input) => {
        setQuote(input.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        addquote(quote, bookid).then((response) => {
            if (response.status === 200) {
                navigate("/home")
            } else {
                alert("Failed to add book")
            }
        })
    }

    useEffect(() => {
        setDisabledFlag(false)
        if (quote === "") {
            setDisabledFlag(false)
        }
    }, [quote]);

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
    
    <Grid  container spacing={0}  justify="center" direction="column" justifyContent="center" margin={5} style={{width:'40%', maxHeight: '100vh'}}>
             <div className="login-header">
      <Typography component="h1" variant="h3" color="primary" >Add Quote</Typography>
          </div>
            <form className="login-form">
              <div>
                
                <TextField
              margin="normal"
              variant="outlined"
               size="small"
              required
             type="text"
              id="quote"
              label="Quote"
              name="quote"
              onChange={handleQuote}
              style={{width:'80%'}}
              autoFocus
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
        </>
    )
}