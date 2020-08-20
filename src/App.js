import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from './pages/HomePage'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <BrowserRouter>
        {/* notif */}
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
        {/*newletter */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
