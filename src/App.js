import './App.css';
import Navigation from './components/Navigation';
import Card from './components/Card';
import styled from 'styled-components';
import Header from './components/Header';
import useFetch from './components/hooks/useFetch';

function App() {
  const [persons, setPersons] = useFetch('https://rickandmortyapi.com/api/character', 'results');

  return (
    <div className="App">
      {persons.map(({ id, name, image }) => {
        return <Card key={id} name={name} image={image} />;
      })}
      <Header />
      <Card />
      <Navigation />
    </div>
  );
}

export default App;
