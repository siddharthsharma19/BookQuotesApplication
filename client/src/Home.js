import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
            <Box sx={{mx:2,mt:4,display:'flex', flexDirection:'row'}}>
                <Box sx={{mx:2,mt:4,display:'flex', flexDirection:'row'}} >
                    <AddBook />
                </Box>
                <Box sx={{mx:2,mt:4,display:'flex', flexDirection:'column'}}>
                    {console.log(booksArray.length)}
                    {booksArray.map((book) => {
                        return (<BookCard props={book}/>)
                    })}
                    
                </Box>
            </Box>
        </>
    )
}