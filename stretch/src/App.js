import React from 'react';
import { Link, Route } from 'react-router';
import './App.css';

// COMPONENTS
import Form from './components/form.js'
import form from './components/form.js';

function App() {
  return (
    <div className="App">
      <div>
        <Link to='/login'>Login</Link>
        <Link to='register'>Register</Link>
      </div>
      <Route path='/register'/>
      <Route path='/login' />
      <Route exact path='/' component={form} />
    </div>
  );
}

export default App;
