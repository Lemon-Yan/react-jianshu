import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header/index';
import store from './store/index';
import Home from './pages/home';
import Login from './pages/login';
import Detail from './pages/detail/loadable.js';

class App extends Component {
  render() {
    return (
      <Provider store={store}> 
          <BrowserRouter>
            <div>
            <Header />
              <Route path='/' exact component={Home}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
            </div>
          </BrowserRouter> 
      </Provider>
    );
  }
}

export default App;
