import { Button, Grid, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { addbook } from "./methods/actions"

export const AddBook = () => {
    const [bookName, setBookName] = useState("")
    const [author, setAuthorName] = useState("")
    const [disabledFlag, setDisabledFlag] = useState(true)

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
                window.location.reload()
            } else {
                alert("Failed to add book")
            }
        })
    }

    useEffect(() => {
        setDisabledFlag(false)
        if (bookName === "" || author === "") {
            setDisabledFlag(true)
        }
    }, [bookName, author]);

    return (
        <>
    <Grid  container spacing={0}  justify="center" direction="column" justifyContent="center" margin={5} style={{width:'40%', maxHeight: '100vh'}}>
             <div className="login-header">
      <Typography component="h1" variant="h3" color="primary" >Add Book</Typography>
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
          {/* <img src={"/assets/welcome-img.jpg"} style={{width:550,height:400}}/> */}
        
        </>
    )
}