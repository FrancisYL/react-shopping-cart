import React, {useState} from 'react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const ProductCard = ({ product, productInventory, toggleInventory, setShow, toggleSelected }) => {
  const [size, setSize] = useState(null);

  const chooseSize = (selectedSize) => {
    size === selectedSize ? setSize(null) : setSize(selectedSize);
  }

  const addProduct = () => {
    if (size === null) {
      alert('Please select a size');
    } else {
      if ((productInventory[size] - 1) === 0) {
        setSize(null);
      }
      toggleSelected(product, size, 1);
      toggleInventory(product.sku, size, 1);
      setShow(true);
    }
  }

  const availabilities = Object.entries(productInventory);
  const count = availabilities.reduce((a, b) => a + b[1], 0);

  return (
    <Grid item xs={3}>
      <Card>
        <CardContent>
          <CardMedia align="center">
            <img alt={ product.sku } 
                src={require('../../public/data/images/'+product.sku+'_1.jpg')}
                width="75%" height="75%"
                align="center"
            />
          </CardMedia>
          <Typography variant="title" align="center">
            { product.title }
          </Typography>
          <Typography align="center">
            { product.description }
          </Typography>
          <Typography variant="subheading" align="center">
            { '$ ' + product.price }
          </Typography>
        </CardContent>
        <CardActions>
          { availabilities.map(availability => availability[1] !== 0 ?
              size === availability[0] ?
                <Button variant="contained" color="primary"
                        onClick={ () => chooseSize(availability[0]) }>
                  { availability[0] + ': ' + availability[1] }
                </Button>
                :
                <Button onClick={ () => chooseSize(availability[0]) }>
                  { availability[0] + ': ' + availability[1] }
                </Button>
              :
                <Button disabled>
                  { availability[0] }
                </Button> )}
        </CardActions>
        <CardActions>
          { count > 0 ?
            <Button variant="contained" color="primary" fullWidth onClick={ addProduct } >
              { 'Add to Cart' }
            </Button>
            :
            <Button disabled fullWidth>
              { 'Add to Cart' }
            </Button>
          }
        </CardActions>
      </Card>
    </Grid>
  );
}

export default ProductCard;
