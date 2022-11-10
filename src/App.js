import './App.css';
import Navigation from './components/Navigation';
import Card from './components/Card';
import styled from 'styled-components';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Card />
      <Navigation />
    </div>
  );
}

export default App;
