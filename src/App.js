import './App.css';
import Navigation from './components/Navigation';
import styled from 'styled-components';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Home } from './pages/Home';
import Favorites from './pages/Favorites';
import Random from './pages/Random';
import Character from './pages/Character';

function App() {
  // const [persons, setPersons] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch('https://rickandmortyapi.com/api/character');
  //     const data = await response.json();
  //     setPersons(data.results);
  //   }
  //   fetchData();
  // }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/random" element={<Random />} />
            <Route path={'/character/:personId'} element={<Character />} />
            <Route path="*" element={<h1>Page not found</h1>} />
          </Routes>
          <Home></Home>
        </Main>
        <Navigation />
      </div>
    </Router>
  );
}

const Main = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 80%;
  width: 100%;
`;

export default App;
