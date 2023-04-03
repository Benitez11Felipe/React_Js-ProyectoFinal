import { useParams } from 'react-router-dom'
import style from './ProductItem.module.css'

const ProductItem = ({ products }) => {

  const { id } = useParams();

  const productIndividual = products.find(
    (productIndividual) => productIndividual.id == id
  );

  console.log(productIndividual);

  return (

    <div className={style.container}>

      <h1>{productIndividual.title}</h1>

      <img src={productIndividual.image} />

      <h3>Categoria: {productIndividual.category}</h3>

      <p>{productIndividual.description}</p>
      
      <p>Calificación: {productIndividual.rating.rate} / 5</p>

      <h2 className={style.precio}>${productIndividual.price}</h2>

    </div>

  )

}

export default ProductItem