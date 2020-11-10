import React,{useEffect,createContext,useReducer,useContext} from 'react';
import './App.css';
import NavBar from './components/Navbar'
import {BrowserRouter, Route,useHistory,Switch} from 'react-router-dom'
import Home from './components/screens/Home'
import Profile from './components/screens/Profile'
import Signin from './components/screens/Signin'
import Signup from './components/screens/Signup'
import CreatePost from './components/screens/CreatePost'
import UserProfile from './components/screens/UserProfile'
import {reducer,initialState} from './reducers/userReducer'


export const UserContext = createContext()


const Routing = ()=>{
  const history = useHistory()
  const {state,dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER",payload:user})
      
    }else{
      history.push('/signin')
    }
  },[])

  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/signin' component={Signin} />
      <Route exact path='/signup' component={Signup} />
      <Route exact path='/createPost' component={CreatePost} />
      <Route exact path='/profile/:userid' component={UserProfile} />
    </Switch>
  )

}

function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
      <NavBar />
      <Routing />
      
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
