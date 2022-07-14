import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AddQuote } from "./AddQuote";
import { QuoteCard } from "./components/QuotesCard";
import { getQuotes } from "./methods/actions";

export const QuotesPage = (props) => {
    const params = useParams();
    const [quotesArray, setQuotessArray] = useState([]);
    console.log(`Quotes Page ${params.id}`)
    useEffect(()=>{
        
        getQuotes(params.id).then((data)=>{
            setQuotessArray(data.data)
        })
    }, [])

    return (
        <>
            <Box sx={{mx:2,mt:4,display:'flex', flexDirection:'row'}}>
                <Box sx={{mx:2,mt:4,display:'flex', flexDirection:'row'}} >
                    <AddQuote />
                </Box>
                <Box sx={{mx:2,mt:4,display:'flex', flexDirection:'column'}}>
                    {console.log(quotesArray.length)}
                    {quotesArray.map((quote) => {
                        return (<QuoteCard props={quote}/>)
                    })}
                </Box>
            </Box>
        </>
    )
}