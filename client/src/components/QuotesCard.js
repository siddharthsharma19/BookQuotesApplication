import { IconButton, List, ListItemText, Typography } from "@mui/material"
import {Delete, Edit, Save} from '@mui/icons-material'

export const QuoteCard = (props) => {
    return (
        <>
            <List sx={{}} align="center" variant="outlined">
                <ListItemText>
                    <h2>{props.props.quote}</h2>
                    <h4>{props.props.bookName}</h4>
                </ListItemText>
                <IconButton><Save />Save</IconButton>
                <IconButton><Edit />Edit</IconButton>
                <IconButton><Delete/>Delete</IconButton>
            </List>
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