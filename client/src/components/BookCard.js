import { IconButton, List, ListItem, ListItemText, Typography } from "@mui/material"
import {Delete, Edit, Save} from '@mui/icons-material'
import { deletebook } from "../methods/actions"
import { Link, useNavigate, useParams } from "react-router-dom";
import { QuotesPage } from "../QuotesPage";
export const BookCard = (props) => {
    const handleDelete = (input) => {
        deletebook(input).then((response)=>{
            if (response.status === 200) {
                alert("Successful");
            } else {
                alert("Failed")
            }
        })
    }
    return (
        <>
            {console.log(props.props._id)}
            <List sx={{}}>
                <ListItem>
                    <ListItemText>
                        <h2>
<Link to={`book/${props.props._id}`}>{props.props.bookName}</Link>
            
                        </h2>
                        <h4>

            {props.props.author}
                        </h4>
                    </ListItemText>
                    <IconButton><Save /></IconButton>
                    <IconButton><Edit /></IconButton>
                    <IconButton onClick={() => handleDelete(props.props.bookName)}><Delete /></IconButton>
                </ListItem>
            </List>
        </>
    )
}