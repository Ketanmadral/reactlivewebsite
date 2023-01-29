import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import View from './components/users/View';
import NotFound from './components/pages/NotFound';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='view/:id' element={<View />} />
            <Route path='edit/:id' element={<EditUser />} />
            <Route path='adduser' element={<AddUser />} />
            <Route path='*' element={<NotFound />} />
          </Route >

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
