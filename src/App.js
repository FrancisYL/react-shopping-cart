import React from 'react';
import Grid from '@material-ui/core/Grid';

const sizes = ['S', 'M', 'L', 'XL'];
const orders = ['----- Select -----', 'Lowest to Highest', 'Highest to Lowest'];

const SizeSelector = () => (
  <div className="size-selection">
    { Object.values(sizes).map(size => <button className="size-button">{ size }</button>)}
  </div>
)

const OrderSelector = () => (
  <div className="order-selection">
    { 'Order by ' }
    <select>
      { Object.values(orders).map(order => <option value={ order }>{order}</option> )}
    </select>
  </div>
)

const ProductCard = ({ product }) => (
  <Grid item xs={3}>
    <img alt={ product.sku } src={require('../public/data/images/'+product.sku+'_1.jpg')} />
    { product.description} { product.title }  $:{ product.price }
  </Grid>
)

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

const App = ({ products }) => {
  return (
    <div className="shopping-page">
      <SizeSelector />
      <OrderSelector />
      <ProductTable products={ products } />
    </div>
  );
}

export default App;
