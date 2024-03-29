import { IconButton, Input, ListItem, ListItemText} from "@mui/material"
import {Delete, Edit, Save} from '@mui/icons-material'
import { deleteQuote, editQuote } from "../methods/actions"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const QuoteCard = (props) => {
    const navigate = useNavigate()
    const [editClicked, setEditClicked] = useState(false)
    const [editQuoteChange, setEditQuoteChange] = useState(props.props.quote)
    const handleEdit = () => {
        setEditClicked(!editClicked)
    }
    const handleQuoteChange = (input) => {
        setEditQuoteChange(input.target.value)
    }

    const handleSaveChanges = (event) => {
        event.preventDefault()
        console.log(editQuoteChange)
        editQuote(props.props._id, editQuoteChange).then((response) => {
            if (response.status === 200) {
                window.location.reload()
            } else {
                alert("Failed to add book")
            }
        })
    }

    const handleDelete = (input) => {
        deleteQuote(input).then((response)=>{
            if (response.status === 200) {
                window.location.reload()
            } else {
                alert("Failed")
            }
        })
    }

    return (
        <>
                <ListItem sx={{border:"2px solid grey", m:2}}>
                    {
                        editClicked ? <Input value={editQuoteChange} onChange={handleQuoteChange} autoFocus = {true}></Input> : <ListItemText>
                        <h2>{props.props.quote}</h2>
                    </ListItemText>
                    }
                    
                    <IconButton sx={{color:"cadetblue"}} onClick={handleSaveChanges}><Save /></IconButton>
                    <IconButton sx={{color:"green"}} onClick={handleEdit}><Edit /></IconButton>
                    <IconButton sx={{color:"red"}} onClick={() => {handleDelete(props.props._id)}}><Delete/></IconButton>
                </ListItem>
        </>
        
        // <>

        //     {console.log(props.props.quote)}
        //     <Card sx={{ px:2,m:3,borderRadius:8,minWidth: 275}} align="center" variant="outlined">
        //         <CardContent>
        //             <Typography sx={{ fontSize:20}}>
        //   {props.props.quote}
        // </Typography>
        // <Typography sx={{ mt:2,fontSize: 15 }} color="text.secondary" gutterBottom>
        //   {props.props.bookName}
        // </Typography>
        //         </CardContent>
        //     </Card>
        // </>
    )
}