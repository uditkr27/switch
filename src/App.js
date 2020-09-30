import React,{useState, useMemo} from 'react';
import './App.css';
import { MainContext } from './Context/MainContext';

function App() {

  const [user,setUser] = useState(null);
  const providerUser = useMemo(() => ({user,setUser}),[user,setUser])

  return (
    <MainContext.Provider value={providerUser}>
    <div className="App">
     

     
    </div>
    </MainContext.Provider>
  );
}

export default App;
