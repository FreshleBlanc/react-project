import logo from './logo.svg';
import './App.css';
import { useState, useContext } from 'react';
import Counter from './components/Counter';
import Students from './components/Students';
import About from './components/About';
import Contact from './components/Contact';
import Pokemon from './components/pokemon';
import Blog from './views/Blog';
import BlogSingle from './views/BlogSingle'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AuthContext } from './contexts/AuthProvider';

/* 
* Create 2 new React components:
* /about
* /contact
*
* Please add at least one heading, paragraph tag, and unordered list to each component.
*/

export default function App() {
  const { login, logout, user } = useContext(AuthContext)
  
  return (
    <div className="App">
      <h2> Loggedin User: { user.username } </h2>
      {/* <Counter name="WITHOUT CURLY" />
      <Counter default={1} />
      <Counter default={2} />
      <Counter default={3} name="lower case" />
      <Counter default={5} />
      <Counter default={10} name={"WITH CURLY"} /> */}
      
      {/* <Students /> */}

      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/counter">Counter</Link></li>
            <li><Link to="/students">Students</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/pokemon">Pokemon</Link></li>
            {
              (user.loggedIn)?
            
            <li><button onClick={logout}> Log Out </button></li> :
            <li><button onClick={login}> Log In </button></li>
            } 
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/students" element={<Students />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog">
            <Route path=":uid">
              <Route path=":id" element={<BlogSingle />} />
            </Route>
            <Route path="" element={<Blog />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/pokemon" element={<Pokemon />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
  
}