import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component'



function App() {
  return (
    <div >
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/topics' component={HomePage}/>
      <Route path='/topics/:topicid' component={HomePage}/>
    </div>
  );
}

export default App;
