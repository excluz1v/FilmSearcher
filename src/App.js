import React from 'react';
import './App.css';
import Header from './components/header/header'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/footer/footer';
import Landing from './components/landing/landing';
import { Provider } from 'react-redux';
import store from './store';
import { HashRouter as Router, Route } from 'react-router-dom'
import Movie from './components/MovieContainer/Movie';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/movie/:id" component={Movie} />
            <Footer />
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
