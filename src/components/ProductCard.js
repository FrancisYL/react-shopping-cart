import React from 'react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const ProductCard = ({ product }) => (
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
        <Typography variant="display5" align="center">
          { product.description }
        </Typography>
        <Typography variant="subheading" align="center">
          { '$ ' + product.price }
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" fullWidth>
          { 'Add to Cart' }
        </Button>
      </CardActions>
    </Card>
  </Grid>
);

export default ProductCard;
