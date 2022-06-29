import {Login} from './Login'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import {Welcome} from './Welcome';
import { Signup } from './Signup';
import {Home} from './Home'
import { AddBook } from './AddBook';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Welcome/>} />
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/signup" element={<Signup />}/>
      <Route exact path="/home" element={<Home/>} />
      <Route exact path="/addbook" element={<AddBook />}/>
    </Routes>
  );
}

export default App;
