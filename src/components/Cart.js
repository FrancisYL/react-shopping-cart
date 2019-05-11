import React from 'react';

import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

const Cart = ({ selectedState, cartState }) => {
  const totalPrice = selectedState.selected.reduce((a, b) => a + b.price*b.qty, 0);

  return (
    <div className="shopping-cart">
      <Button onClick={ () => cartState.setShow(true) }>Cart</Button>
      <Drawer anchor="right"
              open={ cartState.show }
              onClose={ () => cartState.setShow(false) } >
        { selectedState.selected.map(select => select.qty !== 0 ?
            <React.Fragment>
              <Typography gutterBottom>
                { select.title + ' Price: ' + select.price + ' Quantity: ' + select.qty + ' Subtotal: ' + select.price * select.qty}
              </Typography>
              <Button onClick={() => selectedState.toggle(select, -1)} >
                { 'Remove' }
              </Button>
            </React.Fragment> : null)}
        <Typography>{ 'Total Price: ' + totalPrice }</Typography>
      </Drawer>
    </div>
  );
}

export default Cart;
