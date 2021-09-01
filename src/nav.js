import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

export default function Nav() {
  const counter = useSelector((state) => state.counter);
  let history = useHistory();

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
          <span className="sticky">{counter}</span>
        </div>
      </nav>
    </div>
  );
}
