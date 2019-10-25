import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, SupplierPage } from '../pages';
import EmployeeHeader from '../employee-header';

import './app.css';

const App = () => {
  return (
    <main role="main" className="container">
      <EmployeeHeader total={5}/>
      <Switch>
        <Route
          path="/"
          component={HomePage}
          exact />

        <Route
          path="/cart"
          component={SupplierPage}
          />
      </Switch>
    </main>
  );
};

export default App;
