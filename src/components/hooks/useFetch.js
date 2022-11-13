import { useState, useEffect } from 'react';

export default function useFetch(url) {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      setPersons(data.results);
    }
    fetchData();
  }, [url]);

  return [persons, setPersons];
}
