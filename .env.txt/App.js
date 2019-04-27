import React, { Component } from 'react';
import './App.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import SearchForm from './components/SearchForm';
import DisplayArea from './components/DisplayArea';

// Our app should have state for the current search term and results, so it can pass these things to the display area

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <SearchForm/>
          <DisplayArea/>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
