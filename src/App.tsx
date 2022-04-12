import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import rootReducer from './redux/reducers';
import SwapPage from './pages/SwapPage';
import PoolPage from './pages/PoolPage';
import AddPage from './pages/AddPage';

import './App.scss';
import CreatePage from './pages/CreatePage';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavigationBar />
          <div className="App-container">
            <Routes>
              <Route path="/" element={<Navigate to="/swap" /> } />
              <Route path="/swap" element={<SwapPage />} />
              <Route path="/pool" element={<PoolPage />} />
              <Route path="/add/:first?/:second?" element={<AddPage />} />
              <Route path="/create/:first?/:second?" element={<CreatePage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
