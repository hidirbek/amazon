import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import c from "./Explore.module.css"

const Explore = () => {

  const [productData, setProductData] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/v2/allproducts")
      .then(response => response.json())
      .then(data => setProductData(data))
  }, [])

  console.log(productData);

  return (
    <div className={c.productsWrapper}>
      {
          productData.map(({image, name, _id, price}) =>
            <article className={c.cardWrapper} key={_id}>
              <h1 className={c.productTitle}>{name}</h1>
              <img className={c.productImage} src={image[0].url} alt="" />
              <p>Price:<b>{price}$</b></p>
              <Link className={c.infoLink} to={`/explorenow/${_id}`}>Learn more</Link>
            </article>
          )
      }
    </div>
  )
}

export default Explore