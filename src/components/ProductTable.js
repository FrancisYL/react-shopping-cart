import React from 'react';
import ProductCard from '../components/ProductCard';

import Grid from '@material-ui/core/Grid';

const ProductTable = ({ products, setShow, toggleSelection, inventoryState, db, user }) => {
  const skus = Object.keys(products);

  return (
    <div className="product-table">
      <Grid container spacing={16} justify="center">
        { skus.map(sku => {
          if (inventoryState.inventory !== null && sku in inventoryState.inventory) {
            return <ProductCard key={ sku }
                                product={ products[sku] }
                                productInventory={ inventoryState.inventory[sku] }
                                setInventory={ inventoryState.setInventory }
                                setShow={ setShow }
                                toggleSelection={ toggleSelection }
                                db={ db }
                                user={ user }
                    />
          }
          else return null;
        })}
      </Grid>
    </div>
  );
}

export default ProductTable;
