import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import ItemDetal from './ItemDetail';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About}/>
          <Route path="/shop" component={Shop} />
          <Route path="/shop/:id" component={ItemDetal} />
        </Switch>
        
      
      </div>
    </Router>
    
  );
}

// another component
const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
