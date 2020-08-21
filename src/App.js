import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from './pages/HomePage'
import Header from './components/Header'
import Footer from './components/Footer'
import Notification from './components/Notification'
import Newsletter from './components/Newsletter'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Notification />
        <div>
          <Header />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
          </Switch>
          <Footer />
        </div>
        <Newsletter />
      </BrowserRouter>
    </div>
  );
}

export default App;
