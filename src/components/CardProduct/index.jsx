import style from "./CardProduct.module.css";
import { Link } from "react-router-dom";

const CardProduct = ({ products }) => {

    return (

        <Link to={`${products.id}`} style={{textDecoration: "none"}}>
        
            <div className={style.ProductosInicio}>

                <h2>{products.title}</h2>

                <img src={products.image} />

            </div>

        </Link>
        
    )

}

export default CardProduct