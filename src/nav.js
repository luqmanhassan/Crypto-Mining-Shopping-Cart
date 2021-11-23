import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AppBar, ButtonGroup, Button, Typography, Toolbar} from '@mui/material';

export default function Nav(props) {
  let navigate = useNavigate();
  const counter = useSelector((state) => state.counter);
  const _unit1 = useSelector((state) => state.unit1);
  const _unit2 = useSelector((state) => state.unit2);
  const _unit3 = useSelector((state) => state.unit3);
  const _unit4 = useSelector((state) => state.unit4);
  const _unit5 = useSelector((state) => state.unit5);
  const _unit6 = useSelector((state) => state.unit6);
  const _unit7 = useSelector((state) => state.unit7);
  const _unit8 = useSelector((state) => state.unit8);
  const _unit9 = useSelector((state) => state.unit9);
  const _unit10 = useSelector((state) => state.unit10);
  let u1 = _unit1 > 0 ? 1 : 0;
  let u2 = _unit2 > 0 ? 1 : 0;
  let u3 = _unit3 > 0 ? 1 : 0;
  let u4 = _unit4 > 0 ? 1 : 0;
  let u5 = _unit5 > 0 ? 1 : 0;
  let u6 = _unit6 > 0 ? 1 : 0;
  let u7 = _unit7 > 0 ? 1 : 0;
  let u8 = _unit8 > 0 ? 1 : 0;
  let u9 = _unit9 > 0 ? 1 : 0;
  let u10 = _unit10 > 0 ? 1 : 0;

  return (
    <AppBar
      sx={{
        backgroundColor: props.home ? 'transparent' : 'white',
        p: '10px',
        color: props.home ? 'white' : 'primary.main',
      }}
      position="sticky"
    >
      <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography
          variant="h3"
          ml="50px"
          onClick={() => {
            navigate(`/`);
          }}
        >
          ICrypto
        </Typography>
        <ButtonGroup variant="text" size="large">
          <Button
            onClick={() => {
              navigate(`/shop`);
            }}
            sx={{
              fontSize: '20px',
              color: props.home ? 'white' : 'primary.main',
            }}
          >
            Shop
          </Button>
          <Button
            onClick={() => {
              document.getElementById('cart').style.display = 'flex';
            }}
            sx={{
              fontSize: '20px',
              color: props.home ? 'white' : 'primary.main',
            }}
          >
            Cart
          </Button>
          {counter > 0 && (
            <Typography
              variant="body1"
              sx={{color: props.home ? 'white' : 'primary.main'}}
            >
              {u1 + u2 + u3 + u4 + u5 + u6 + u7 + u8 + u9 + u10}
            </Typography>
          )}
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
}
