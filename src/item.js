import React from 'react';
import {useDispatch} from 'react-redux';
import {Grid, ButtonGroup, Typography, IconButton} from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
const Item = (props) => {
  const type1 = props.type1;
  const type2 = props.type2;
  const dispatch = useDispatch();

  return (
    <Grid
      item
      container
      spacing={1}
      direction="column"
      id={props.id}
      align="center"
      my="20px"
    >
      <Grid item align="center">
        <img src={props.src} width="100px" alt={props.alt} />
      </Grid>
      <Grid item align="center">
        <Typography variant="body1" color="black">
          {props.alt}
        </Typography>
      </Grid>
      <Grid item align="center">
        <Typography variant="body1" color="black">
          {props.price}
        </Typography>
      </Grid>

      <Grid item id="stuff2">
        <ButtonGroup>
          <IconButton
            onClick={() => {
              dispatch({type: type2});
            }}
          >
            <RemoveOutlinedIcon />
          </IconButton>
          {props.children}

          <IconButton
            onClick={() => {
              dispatch({type: type1});
            }}
          >
            <AddOutlinedIcon />
          </IconButton>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};
export default Item;
