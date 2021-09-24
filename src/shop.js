import React from 'react';
import {useHistory} from 'react-router-dom';
import Cart from './cart.js';
import './index.css';
import iphone11 from './images/iphone11.png';
import iphone11pro from './images/iphone11pro.jpeg';
import xbattery from './images/xbattery.jpeg';
import xrbattery from './images/xrbattery.png';
import kit1 from './images/kit1.jpeg';
import kit2 from './images/kit2.jpeg';
import xdataport from './images/xdataport.jpg';
import xrdataport from './images/xrdataport.jpg';
import xrcamera from './images/xrcamera.jpeg';
import xcamera from './images/xcamera.jpeg';
import Nav from './nav.js';
import {Grid, Button, Typography} from '@mui/material';
const selections = [
  'Screens',
  'Batteries',
  'DataPorts',
  'Cameras',
  'RepairKits',
];
function toggle(select) {
  for (let i = 0; i < selections.length; i++) {
    if (selections[i] === select) {
      document.getElementById(selections[i]).style.display = 'flex';
    } else {
      document.getElementById(selections[i]).style.display = 'none';
    }
  }
}
function Shop() {
  return (
    <Grid container className="shop">
      <Cart />
      <Nav />
      <Grid item container sx={{display: 'flex', flexFlow: 'row nowrap'}}>
        <Grid
          item
          sx={{
            display: 'flex',
            flexFlow: 'column nowrap',
            p: '50px',
          }}
        >
          <Typography variant="h3" pb="50px">
            Products
          </Typography>
          <Button
            onClick={() => {
              toggle('Screens');
            }}
            sx={{color: 'black'}}
          >
            Screens
          </Button>
          <Button
            onClick={() => {
              toggle('Batteries');
            }}
            sx={{color: 'black'}}
          >
            Batteries
          </Button>
          <Button
            onClick={() => {
              toggle('DataPorts');
            }}
            sx={{color: 'black'}}
          >
            Data Ports
          </Button>
          <Button
            onClick={() => {
              toggle('Cameras');
            }}
            sx={{color: 'black'}}
          >
            Cameras
          </Button>
          <Button
            onClick={() => {
              toggle('RepairKits');
            }}
            sx={{color: 'black'}}
          >
            Repair Kits
          </Button>
        </Grid>

        <Screens />
        <Batteries />
        <DataPorts />
        <Cameras />
        <RepairKits />
      </Grid>
    </Grid>
  );
}

const Screens = () => {
  return (
    <Grid
      item
      className="Screens"
      id="Screens"
      sx={{display: 'flex', pt: '100px', ml: '100px'}}
    >
      <Product
        src={iphone11}
        alt="Iphone 11 Screen"
        price="150"
        unit="Unit1"
        category="Screens"
      />
      <Product
        src={iphone11pro}
        alt="Iphone 11 Pro Screen"
        unit="Unit2"
        price="150"
      />
    </Grid>
  );
};

const Batteries = () => {
  return (
    <Grid
      item
      container
      className="Batteries"
      id="Batteries"
      sx={{display: 'none', pt: '100px', ml: '100px'}}
    >
      <Product src={xbattery} alt="Iphone X Battery" unit="Unit3" price="60" />
      <Product
        src={xrbattery}
        alt="Iphone XR Battery"
        unit="Unit4"
        price="60"
      />
    </Grid>
  );
};

const DataPorts = () => {
  return (
    <Grid
      item
      container
      className="DataPorts"
      id="DataPorts"
      sx={{display: 'none', pt: '100px', ml: '100px'}}
    >
      <Product
        src={xdataport}
        alt="Iphone X Data Port"
        unit="Unit5"
        price="100"
      />
      <Product
        src={xrdataport}
        alt="Iphone XR Data Port"
        unit="Unit6"
        price="100"
      />
    </Grid>
  );
};

const Cameras = () => {
  return (
    <Grid
      item
      container
      className="Cameras"
      id="Cameras"
      sx={{display: 'none', pt: '100px', ml: '100px'}}
    >
      <Product src={xcamera} alt="Iphone X Camera" unit="Unit7" price="130" />
      <Product src={xrcamera} alt="Iphone XR Camera" unit="Unit8" price="130" />
    </Grid>
  );
};

const RepairKits = () => {
  return (
    <Grid
      item
      container
      className="RepairKits"
      id="RepairKits"
      sx={{display: 'none', pt: '100px', ml: '100px'}}
    >
      <Product src={kit1} alt="Iphone X Repair Kit" unit="Unit9" price="50" />
      <Product src={kit2} alt="Iphone XR Repair Kit" unit="Unit10" price="50" />
    </Grid>
  );
};

const Product = (props) => {
  let history = useHistory();
  return (
    <Grid
      item
      className="Product"
      id="Product"
      onClick={() => {
        history.push(props.unit);
      }}
      direction="center"
      align="center"
      mx="10px"
    >
      <img src={props.src} alt={props.alt} width="300px" />
      <Typography variant="h6">{props.alt}</Typography>
      <Typography variant="body1">{props.price}</Typography>
    </Grid>
  );
};

export default Shop;
