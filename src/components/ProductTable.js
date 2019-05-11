import React from 'react';
import ProductCard from '../components/ProductCard';

import Grid from '@material-ui/core/Grid';

const ProductTable = ({ products }) => {
  const skus = Object.keys(products);

  return (
    <div className="product-table">
      <Grid container spacing={16} justify="center">
        { skus.map(sku => <ProductCard key={ sku } product={ products[sku] } />) }
      </Grid>
    </div>
  );
}

export default ProductTable;
