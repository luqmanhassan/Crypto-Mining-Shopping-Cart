import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
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
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/unit1" exact component={Unit1} />
        <Route path="/unit2" exact component={Unit2} />
        <Route path="/unit3" exact component={Unit3} />
        <Route path="/unit4" exact component={Unit4} />
        <Route path="/unit5" exact component={Unit5} />
        <Route path="/unit6" exact component={Unit6} />
        <Route path="/unit7" exact component={Unit7} />
        <Route path="/unit8" exact component={Unit8} />
        <Route path="/unit9" exact component={Unit9} />
        <Route path="/unit10" exact component={Unit10} />
        <Route path="/" render={() => <div>404</div>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
