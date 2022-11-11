import styled from 'styled-components';

export default function Card() {
  return (
    <CardElement>
      <div>
        <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="Morty Smith" />
      </div>
      <h2>Character Name</h2>
      <button>Show more</button>
    </CardElement>
  );
}

const CardElement = styled.article`
  display: inline-block;
  height: 40vh;
  border: 1px solid black;
  padding: 20px;
  background-color: darkgray;
  border-radius: 10%;
`;

const Image = styled.div`
  padding: 15px;
`;
