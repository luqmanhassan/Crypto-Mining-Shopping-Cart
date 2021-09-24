import React from 'react';
import {useHistory} from 'react-router-dom';
import xbattery from '../images/xbattery.jpeg';
import Nav from '../nav.js';
import {useDispatch} from 'react-redux';
import Cart from '../cart.js';
import {Grid, Button, Typography, ButtonGroup} from '@mui/material';

const Unit3 = (props) => {
  let history = useHistory();
  const dispatch = useDispatch();
  return (
    <Grid container id="Unit3">
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
          <img src={xbattery} width="500px" alt="Iphone X Battery" />
        </Grid>
        <Grid item align="center">
          <Typography variant="h3">Iphone X Battery</Typography>
          <Typography variant="h5" my="20px">
            $60
          </Typography>
          <ButtonGroup>
            <Button
              onClick={() => {
                dispatch({type: 'unit3_add'});
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

export default Unit3;
