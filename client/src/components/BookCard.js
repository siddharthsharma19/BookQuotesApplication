import { Card, CardContent, Typography } from "@mui/material"

export const BookCard = (props) => {
    return (
        <>
            {console.log(props.props.author)}
            <Card sx={{ px:2,m:3,borderRadius:8,minWidth: 275}} align="center" variant="outlined">
                <CardContent>
                    <Typography sx={{ fontSize:20}}>
          {props.props.bookName}
        </Typography>
        <Typography sx={{ mt:2,fontSize: 15 }} color="text.secondary" gutterBottom>
          {props.props.author}
        </Typography>
                </CardContent>
            </Card>
        </>
    )
}