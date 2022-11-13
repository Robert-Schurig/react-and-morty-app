import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

export default function Character({ persons }) {
  const [showMore, setShowMore] = useState(false);
  let { personId } = useParams();

  const handleToggleMore = () => {
    setShowMore(!showMore);
  };
  const result = persons.find(({ id }) => id === Number(personId));

  return (
    <CharactersContainer>
      <button>Save as favorite</button>
      <img src={result.image} alt={result.name} />
      <button onClick={handleToggleMore}>Show More</button>
      <MoreInformation>
        <ul>
          <li>species:{result.species} </li>
          <li>species:{result.gender} </li>
          <li>species:{result.satus} </li>
        </ul>
      </MoreInformation>
    </CharactersContainer>
  );
}

const CharactersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px auto;
`;
const MoreInformation = styled.div`
  ${(props) => !props.showMore && 'display: none'};
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;
