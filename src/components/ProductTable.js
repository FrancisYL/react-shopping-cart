import React from 'react';
import ProductCard from '../components/ProductCard';

import Grid from '@material-ui/core/Grid';

const ProductTable = ({ products, setShow }) => {
  const skus = Object.keys(products);

  return (
    <div className="product-table">
      <Grid container spacing={16} justify="center">
        { skus.map(sku => <ProductCard key={ sku } product={ products[sku] } setShow={ setShow } />) }
      </Grid>
    </div>
  );
}

export default ProductTable;
