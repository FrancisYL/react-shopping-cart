import React from 'react';

import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';

const Cart = ({ selectedState, toggleInventory, cartState }) => {
  const totalPrice = selectedState.selected.reduce((a, b) => a + b.price*b.qty, 0);

  const removeProduct = select => {
    selectedState.toggleSelected(select, select.size, -1);
    toggleInventory(select.sku, select.size, -1);
  }

  return (
    <div className="shopping-cart">
      <Button variant="contained"
              color="primary"
              onClick={ () => cartState.setShow(true) } >
        Cart
      </Button>
      <Drawer anchor="right"
              open={ cartState.show }
              onClose={ () => cartState.setShow(false) } >
        { selectedState.selected.map(select => select.qty !== 0 ?
          <React.Fragment>
            <Typography gutterBottom>
              { select.title + ' Price: ' + select.price + ' Size: ' + select.size + ' Quantity: ' + select.qty + ' Subtotal: ' + select.price * select.qty}
            </Typography>
            <Button onClick={ () => removeProduct(select) } >
              { 'Remove' }
            </Button>
          </React.Fragment> : null)}
        <Typography>{ 'Total Price: ' + totalPrice }</Typography>
      </Drawer>
    </div>
  );
}

export default Cart;
