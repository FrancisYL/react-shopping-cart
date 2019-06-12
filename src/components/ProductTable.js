import React from 'react';
import ProductCard from '../components/ProductCard';

import Grid from '@material-ui/core/Grid';

const ProductTable = ({ products, inventoryState, setShow, toggleSelected }) => {
  const skus = Object.keys(products);

  return (
    <div className="product-table">
      <Grid container spacing={16} justify="center">
        { skus.map(sku => 
          <ProductCard key={ sku }
                      product={ products[sku] }
                      productInventory={ inventoryState.inventory[sku] }
                      toggleInventory={ inventoryState.toggleInventory }
                      setShow={ setShow }
                      toggleSelected={ toggleSelected } />)
        }
      </Grid>
    </div>
  );
}

export default ProductTable;
