import './App.css';
import Topbar from './Compo/Top/Topbar';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Settings from './pages/setting/Settings';
import Home from './pages/Home';
import Single from './pages/Single/Single';
import Write from './pages/write/Write';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';




function App() {
  const user=false
  return (
    <>
      
     <Router>
     <Topbar/>
    <Routes>
    <Route path='/' exact element={<Home/>}/>
    <Route path='/register' exact element={user?<Login/>:<Register/>}/>
    <Route path='/login' exact element={user?<Home/>:<Login/>}/>
    <Route path='/write' exact element={user?<Write/>:<Login/>}/>
    <Route path='/settings' exact element={user?<Settings/>:<Login/>}/>
    <Route path='/post/:postId' exact element={<Single/>}/>
    
      </Routes>
     </Router>
    </>
  );
}

export default App;



