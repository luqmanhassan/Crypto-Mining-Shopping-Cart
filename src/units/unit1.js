import React from 'react';
import {useNavigate} from 'react-router-dom';
import iphone11 from '../images/iphone11.png';
import Cart from '../cart.js';
import Nav from '../nav.js';
import {useDispatch} from 'react-redux';
import {Grid, Button, Typography, ButtonGroup} from '@mui/material';

const Unit1 = (props) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Grid container id="Unit1">
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
          <img src={iphone11} width="500px" alt="Iphone 11 Screen" />
        </Grid>

        <Grid item className="info" align="center">
          <Typography variant="h3">Iphone 11 Screen</Typography>
          <Typography variant="h5" my="20px">
            $150
          </Typography>
          <ButtonGroup>
            <Button
              onClick={() => {
                dispatch({type: 'unit1_add'});
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

export default Unit1;
