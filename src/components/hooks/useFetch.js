import { useState, useEffect } from 'react';

export default function useFetch(urlToFetch, arrayProp) {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(urlToFetch);
      const data = await response.json();
      setPersons(data.results);
    }
    fetchData();
  }, [urlToFetch, arrayProp]);

  return [persons, setPersons];
}
