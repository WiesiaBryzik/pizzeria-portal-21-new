import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Kitchen from './components/views/Kitchen/Kitchen';
import TablesBookingEdit from './components/views/TablesBookingEdit/TablesBookingEdit';
import TablesBookingNew from './components/views/TablesBookingNew/TablesBookingNew';
import TablesEventsEdit from './components/views/TablesEventsEdit/TablesEventsEdit';
import TablesEventsNew from './components/views/TablesEventsNew/TablesEventsNew';
import Waiter from './components/views/Waiter/Waiter';
import WaiterOrderEdit from './components/views/WaiterOrderEdit/WaiterOrderEdit';
import WaiterOrderNew from './components/views/WaiterOrderNew/WaiterOrderNew';

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} />
          <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
          <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
          <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/bookings/booking/:id'} component={TablesBookingEdit} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/bookings/new'} component={TablesBookingNew} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/events/event/:id'} component={TablesEventsEdit} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/events/new'} component={TablesEventsNew} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter/orders/order/:id'} component={WaiterOrderEdit} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter/order/new'} component={WaiterOrderNew} />

          <div className="App">
            <header className="App-header">
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React Now! Right now!
              </a>
            </header>
          </div>
        </Switch>
      </MainLayout>
    </BrowserRouter>

  );
}

export default App;
