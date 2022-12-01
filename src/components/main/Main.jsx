import React from 'react';
import collectionData from '../../dummy-data-collection.json';
import ProductCard from '../product-card/ProductCard';
import { v4 as uuidv4 } from 'uuid';
import c from "./Main.module.css";

const Main = () => {
  return (
    <div className={c.main}>
      {
        collectionData.map(collectionItem =>
          <ProductCard key={uuidv4()} linkLabel={collectionItem.linkLabel} linkURL={collectionItem.linkURL} image={collectionItem.image} title={collectionItem.title}/>  
        )
      }
    </div>
  )
}

export default Main