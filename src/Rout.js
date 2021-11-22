import {BrowserRouter, Route, Routes} from 'react-router-dom';
import App from './App.js';
import Shop from './shop.js';
import Unit1 from './units/unit1.js';
import Unit2 from './units/unit2.js';
import Unit3 from './units/unit3.js';
import Unit4 from './units/unit4.js';
import Unit5 from './units/unit5.js';
import Unit6 from './units/unit6.js';
import Unit7 from './units/unit7.js';
import Unit8 from './units/unit8.js';
import Unit9 from './units/unit9.js';
import Unit10 from './units/unit10.js';
const Rout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="shop" element={<Shop />} />
        <Route path="unit1" element={<Unit1 />} />
        <Route path="unit2" element={<Unit2 />} />
        <Route path="unit3" element={<Unit3 />} />
        <Route path="unit4" element={<Unit4 />} />
        <Route path="unit5" element={<Unit5 />} />
        <Route path="unit6" element={<Unit6 />} />
        <Route path="unit7" element={<Unit7 />} />
        <Route path="unit8" element={<Unit8 />} />
        <Route path="unit9" element={<Unit9 />} />
        <Route path="unit10" element={<Unit10 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rout;
