import { IconButton, Input, ListItem, ListItemText } from "@mui/material"
import {Delete, Edit, Save} from '@mui/icons-material'
import { deletebook, editBook } from "../methods/actions"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
export const BookCard = (props) => {
    const navigate = useNavigate();
    const [editClicked, setEditClicked] = useState(false)
    const [editBookName, setEditBookName] = useState(props.props.bookName)
    const [editAuthorName, setEditAuthorName] = useState(props.props.author)
    const handleEdit = () => {
        setEditClicked(!editClicked)
    }
    const handleAuthorChange = (input) => {
        setEditAuthorName(input.target.value)
    }
    const handleBookName = (input) => {
        setEditBookName(input.target.value)
    }

    const handleSaveChanges = (event) => {
        event.preventDefault()
        console.log(editBookName)
        console.log(editAuthorName)
        editBook(props.props._id, editBookName, editAuthorName).then((response) => {
            if (response.status === 200) {
                window.location.reload()
            } else {
                alert("Failed to add book")
            }
        })
    }

    const handleDelete = (input) => {
        deletebook(input).then((response)=>{
            if (response.status === 200) {
                window.location.reload()
            } else {
                alert("Failed")
            }
        })
    }

    return (
        <>
    
            {console.log(props.props._id)}
                <ListItem sx={{border:"2px solid grey", borderRadius:"10",m:2}}>
                    {
                        editClicked ?<ListItemText>
                            <Input autoFocus="true" value={editBookName} onChange={handleBookName}></Input>
                            <br />
                            <Input value={editAuthorName} onChange={handleAuthorChange}></Input>
            
                    </ListItemText> :<ListItemText>
                        <h2>
<Link to={`book/${props.props._id}`} style={{ textDecoration: 'none' }}>{props.props.bookName}</Link>
            
                        </h2>
                        <h4>

            {props.props.author}
                        </h4>
                    </ListItemText>
                    }
                    
                    <IconButton sx={{color:"cadetblue"}} onClick={handleSaveChanges}><Save /></IconButton>
                    <IconButton sx={{color:"green"}} onClick={handleEdit}><Edit /></IconButton>
                    <IconButton sx={{color:"red"}} onClick={() => handleDelete(props.props._id)}><Delete /></IconButton>
                </ListItem>
        </>
    )
}