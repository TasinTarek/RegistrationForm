import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignUp from './Pages/SignUp/SignUp';

import Password from './Pages/SignUp/Password';
import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUp />}/>
        
        <Route path="contact/password" element={<Password />}/>
        <Route path="login" element={<Login />}/>
        <Route path="dashboard" element={<Dashboard />}/>
          
      </Routes>
    </div>
  );
}

export default App;
