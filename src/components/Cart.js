import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

const Cart = ({ selects }) => {
  const [show, setShow] = useState(false);

  const totalPrice = selects.reduce((a, b) => a.qty * a.price + b.qty * b.price);

  return (
    <div className="shopping-cart">
      <Button variant="containted" onClick={ () => setShow(true) }>Cart</Button>
      <Drawer elevation="10" anchor="right" open={ show } onClose={ () => setShow(false) }>
        { selects.map(select => <Button>{ select.sku }</Button>) }
        <Typography>{ 'Total Price: ' + totalPrice }</Typography>
      </Drawer>
    </div>
  );
}

export default Cart;
