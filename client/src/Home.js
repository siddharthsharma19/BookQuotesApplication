import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddBook } from "./AddBook";
import { AddQuote } from "./AddQuote";
import { BookCard } from "./components/BookCard";
import { QuoteCard } from "./components/QuotesCard";
import { getAllBooks, getAllQuotes } from "./methods/actions";

export const Home = () => {
    const navigate = useNavigate();
    const handleAddBook = () => {
        navigate('/addbook');
    }
    const [booksArray, setBooksArray] = useState([]);
    const [quotesArray, setQuotessArray] = useState([]);
    useEffect(()=>{
        getAllBooks().then((data) => {
            setBooksArray(data.data)
        })
        getAllQuotes().then((data)=>{
            setQuotessArray(data.data)
        })
    }, [])

    return (
        <>
            <Box sx={{mx:2,mt:4,display:'flex', flexDirection:'row'}} backgroundColor="primary.main">
                <Box sx={{mx:2,mt:4,display:'flex', flexDirection:'column'}}>
                    {console.log(booksArray.length)}
                    {booksArray.map((book) => {
                        return (<BookCard props={book}/>)
                    })}
                    {quotesArray.map((quote) => {
                        return (<QuoteCard props={quote}/>)
                    })}
                </Box>
                <Box sx={{mx:2,mt:4,display:'flex', flexDirection:'row'}} >
                    <AddBook />
                    <AddQuote />
                </Box>
            {/* <Button onClick={handleAddBook}>Add Book</Button> */}
            </Box>
        </>
    )
}