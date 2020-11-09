import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter, Route} from 'react-router-dom'

import Home from './components/screens/Home'
import Profile from './components/screens/Profile'
import Signin from './components/screens/Signin'
import Signup from './components/screens/Signup'
import CreatePost from './components/screens/CreatePost'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/signin' component={Signin} />
      <Route exact path='/signup' component={Signup} />
      <Route exact path='/createPost' component={CreatePost} />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
