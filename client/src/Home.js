import { Cookie } from "@mui/icons-material";
import { AppBar, Box, Button, Grid, List, Toolbar, Typography } from "@mui/material";
import { border } from "@mui/system";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { AddBook } from "./AddBook";
import { AddQuote } from "./AddQuote";
import { BookCard } from "./components/BookCard";
import { QuoteCard } from "./components/QuotesCard";
import { getAllBooks, getAllQuotes } from "./methods/actions";

export const Home = () => {
    const [booksArray, setBooksArray] = useState([]);
    
    useEffect(()=>{
        getAllBooks().then((data) => {
            setBooksArray(data.data)
        })
    }, [])

    return (
        <>
            <AppBar position="sticky">
  <Toolbar>
    <Typography sx={{ml:5}} variant="h6">
      Books&Quotes
    </Typography>
    <Button  sx={{marginLeft:"auto", color:"inherit"}}>LogOut</Button>
  </Toolbar>
</AppBar>
            <Grid sx={{display:'flex', flexDirection:'row'}}>
                
                    <AddBook />
                    <List sx={{mt:"5%", width:"500px", height:"wrap-content"}}>
                        <Typography sx={{padding: 2}} variant="h3">Books</Typography>
                    {console.log(booksArray.length)}
                    {booksArray.length>0?booksArray.map((book) => {
                        return (<BookCard props={book}/>)
                    }):<Typography>You need to add books.</Typography>}
                    </List>
            </Grid>
        </>
    )
}