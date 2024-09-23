
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Login from './Component/Login';
import Regis from './Component/Regis';
import Dashboard from './Component/Dashboard';
import Privateroute from './Component/Privateroute'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faLock);


function App() {
  return (
    <BrowserRouter>
    <Routes>
         <Route path='/login'element={<Login/>}></Route>
         <Route path='/Register' element={<Regis/>}></Route>
         <Route path='/dashboard' element={<Privateroute><Dashboard/></Privateroute>}></Route>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
