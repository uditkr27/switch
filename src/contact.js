import React,{useState, useMemo} from 'react';
import { BrowserRouter as Router , Switch, Route, Link }  from "react-router-dom" 
import './App.css';
import { MainContext } from './Context/MainContext';
import Home from './Page/Home';
import Shuffle from './Page/Shuffle';

function App() {

  const [user,setUser] = useState(null);
  const providerUser = useMemo(() => ({user,setUser}),[user,setUser])

  return (
    <MainContext.Provider value={providerUser}>
      <Router>
    <div className="App">
      <ul>
        <li>
          <Link to="/"> Home </Link>
        </li>  
        <li>
          <Link to="/shuffle">Shuffle</Link>
        </li>
      </ul>
     <Switch>
        <Route exact path="/" component={Home}/>

        <Route exact path="/shuffle" component={Shuffle}/>
     </Switch>

     
    </div>
    </Router>
    </MainContext.Provider>
  );
}

export default App;
