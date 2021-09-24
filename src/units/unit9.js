import React from 'react';
import {useHistory} from 'react-router-dom';
import kit1 from '../images/kit1.jpeg';
import Nav from '../nav.js';
import {useDispatch} from 'react-redux';
import Cart from '../cart.js';
import {Grid, Button, Typography, ButtonGroup} from '@mui/material';

const Unit9 = (props) => {
  let history = useHistory();
  const dispatch = useDispatch();
  return (
    <Grid container id="Unit9">
      <Cart />
      <Nav />
      <Grid
        item
        container
        spacing={6}
        sx={{
          my: '20px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid item>
          <img src={kit1} width="500px" alt="kit1" />
        </Grid>
        <Grid item align="center">
          <Typography variant="h3">Kit1 </Typography>
          <Typography variant="h5" my="20px">
            $50
          </Typography>
          <ButtonGroup>
            <Button
              onClick={() => {
                dispatch({type: 'unit9_add'});
                dispatch({type: 'counter_add'});
                document.getElementById('cart').style.display = 'flex';
              }}
            >
              Add To Cart
            </Button>
            <Button
              onClick={() => {
                history.push('/shop');
              }}
            >
              Go Back
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Unit9;
