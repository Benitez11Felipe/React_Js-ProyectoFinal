import "./CardProduct.module.css";
import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";

const CardProduct = ({ products }) => {

    return (
        <div className="ProductosInicio" >
            <Card  sx={{ maxWidth: 250 }}>
                <CardActionArea>
                    
                    <CardMedia
                    component="img"
                    image={products.image}
                    alt="GOAT"
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