import styled from 'styled-components';

export default function Card({ name, image, characterProps }) {
  return (
    <CardElement>
      <div>
        <img src={image} alt="Morty Smith" />
      </div>
      <h2> {name}</h2>
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
