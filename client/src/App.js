import {Login} from './Login'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Signup } from './Signup';
import {Home} from './Home'
import { AddBook } from './AddBook';
import { QuotesPage } from './QuotesPage';
import WelcomeTabs from './WelcomeTab';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<WelcomeTabs/>} />
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/signup" element={<Signup />}/>
      <Route exact path="/home" element={<Home/>} />
      <Route exact path="/addbook" element={<AddBook />}/>
      <Route exact path="/home/book/:id" element={<QuotesPage />}/>
    </Routes>
  );
}

export default App;
