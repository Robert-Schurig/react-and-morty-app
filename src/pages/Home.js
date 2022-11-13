import { Card } from '../components/Card';
import useFetch from '../components/hooks/useFetch';

const Home = () => {
  const [persons, setPersons] = useFetch('https://rickandmortyapi.com/api/character');

  return (
    <>
      {persons.map((person) => {
        return <Card key={person.id} person={person} />;
      })}
    </>
  );
};

export { Home };
