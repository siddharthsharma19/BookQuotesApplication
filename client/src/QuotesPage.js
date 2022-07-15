import { AppBar, Button, Grid, List, Toolbar, Typography } from "@mui/material";
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
    }, [params.id])

    return (
        <>
            <AppBar position="sticky">
  <Toolbar>
    <Typography sx={{ml:5}} variant="h6">
      Books&Quotes
    </Typography>
    <Button  sx={{marginLeft:"auto", color:"inherit"}} >LogOut</Button>
  </Toolbar>
</AppBar>
            <Grid sx={{display:'flex', flexDirection:'row'}}>
                    <AddQuote />
            
                <List sx={{mt:"5%", width:"500px", height:"wrap-content"}}>
                    <Typography sx={{padding: 2}} variant="h3">Quotes</Typography>
                    {console.log(quotesArray.length)}
                    {quotesArray.length>0?quotesArray.map((quote) => {
                        return (<QuoteCard props={quote}/>)
                    }):<Typography>You need to add quotes.</Typography>}
                </List>
            </Grid>
        </>
    )
}