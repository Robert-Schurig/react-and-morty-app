import styled from 'styled-components';

export default function Card() {
  return (
    <article>
      <div>
        <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="Morty Smith" />
      </div>
      <h2>Character Name</h2>
      <button>Show more</button>
    </article>
  );
}
