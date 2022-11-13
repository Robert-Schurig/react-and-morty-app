import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = ({ person }) => {
  return (
    <CardElement>
      <article key={person.id}>
        <Image>
          <img src={person.image} alt={person.name} />
        </Image>
        <h2> {person.name}</h2>
        <Link to={{ pathname: '/character/' + person.id }}>
          <button>Show more</button>
        </Link>
      </article>
    </CardElement>
  );
};

const CardElement = styled.div`
  display: flex;
  height: 500px;
  border: 1px solid black;
  padding: 20px;
  background-color: darkgray;
  border-radius: 10%;
`;

const Image = styled.div`
  padding: 15px;
`;
export { Card };
