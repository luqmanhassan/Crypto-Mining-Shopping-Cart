import React from 'react';
import {useHistory} from 'react-router-dom';
import xrdataport from '../images/xrdataport.jpg';
import Nav from '../nav.js';
import {useDispatch} from 'react-redux';
import Cart from '../cart.js';
import {Grid, Button, Typography, ButtonGroup} from '@mui/material';

const Unit6 = (props) => {
  let history = useHistory();
  const dispatch = useDispatch();
  return (
    <Grid container className="Unit Unit4" id="Unit4">
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
          <img src={xrdataport} width="300px" alt="Iphone XR Dataport" />
        </Grid>
        <Grid item align="center">
          <Typography variant="h3">Iphone XR Dataport </Typography>

          <Typography variant="h5" my="20px">
            $100
          </Typography>
          <ButtonGroup>
            <Button
              onClick={() => {
                dispatch({type: 'unit6_add'});
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

export default Unit6;
