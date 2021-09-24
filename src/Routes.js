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
        <Route path={process.env.PUBLIC_URL + '/'} component={App} />
        <Route path={process.env.PUBLIC_URL + '/shop'} exact component={Shop} />
        <Route
          path={process.env.PUBLIC_URL + '/unit1'}
          exact
          component={Unit1}
        />
        <Route
          path={process.env.PUBLIC_URL + '/unit2'}
          exact
          component={Unit2}
        />
        <Route
          path={process.env.PUBLIC_URL + '/unit3'}
          exact
          component={Unit3}
        />
        <Route
          path={process.env.PUBLIC_URL + '/unit4'}
          exact
          component={Unit4}
        />
        <Route
          path={process.env.PUBLIC_URL + '/unit5'}
          exact
          component={Unit5}
        />
        <Route
          path={process.env.PUBLIC_URL + '/unit6'}
          exact
          component={Unit6}
        />
        <Route
          path={process.env.PUBLIC_URL + '/unit7'}
          exact
          component={Unit7}
        />
        <Route
          path={process.env.PUBLIC_URL + '/unit8'}
          exact
          component={Unit8}
        />
        <Route
          path={process.env.PUBLIC_URL + '/unit9'}
          exact
          component={Unit9}
        />
        <Route
          path={process.env.PUBLIC_URL + '/unit10'}
          exact
          component={Unit10}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
