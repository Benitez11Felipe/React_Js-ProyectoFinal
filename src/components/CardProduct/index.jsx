import "./CardProduct.module.css";
import { Card, CardActionArea, CardMedia, Typography } from "@mui/material";

const CardProduct = ({ products }) => {

    return (
        <div>
            <Card sx={{ maxWidth: 250 }}>
                <CardActionArea>
                    
                    <CardMedia
                    component="img"
                    image={products.image}
                    />
                    
                    <Typography gutterBottom variant="h5" component="div">
                        { products.title }
                    </Typography>
                    
                </CardActionArea>
            </Card>
        </div>
        
    )

}

export default CardProduct