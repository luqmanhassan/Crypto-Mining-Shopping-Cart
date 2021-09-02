import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';

export default function Nav() {
  //  const counter = useSelector((state) => state.counter);
  let history = useHistory();
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
    <div>
      <nav>
        <div
          className="logo"
          onClick={() => {
            history.push('/');
          }}
        >
          iFix
        </div>
        <div id="nav_right">
          <span
            onClick={() => {
              history.push('/shop');
            }}
          >
            Shop
          </span>
          <span
            onClick={() => {
              document.getElementById('cart').style.display = 'flex';
            }}
          >
            Cart
          </span>
          {counter > 0 && (
            <span className="sticky">
              {u1 + u2 + u3 + u4 + u5 + u6 + u7 + u8 + u9 + u10}
            </span>
          )}
        </div>
      </nav>
    </div>
  );
}
