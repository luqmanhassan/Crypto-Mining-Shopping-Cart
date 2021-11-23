import React from 'react';
import {useNavigate} from 'react-router-dom';
import lit1 from '../images/lit1.jpeg';
import Nav from '../nav.js';
import {useDispatch} from 'react-redux';
import Cart from '../cart.js';
import {Grid, Button, Typography, ButtonGroup} from '@mui/material';

const Unit7 = (props) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Grid container id="Unit7">
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
          <img src={lit1} width="500px" alt="Iphone X Camera" />
        </Grid>
        <Grid item align="center">
          <Typography variant="h3">Lit Rig 1 </Typography>
          <Typography variant="h5" my="20px">
            $5000
          </Typography>
          <ButtonGroup>
            <Button
              onClick={() => {
                dispatch({type: 'unit7_add'});
                dispatch({type: 'counter_add'});
                document.getElementById('cart').style.display = 'flex';
              }}
            >
              Add To Cart
            </Button>
            <Button
              onClick={() => {
                navigate(`/shop`);
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

export default Unit7;
