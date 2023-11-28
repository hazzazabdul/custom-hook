/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

function useFetch(fetchUrl) {
  const [fetchData, setFetchData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(fetchUrl);
        if (!response.ok) {
            throw Error (`Data not found! status:  ${response.status}`)
        }
        const data = await response.json();
        setFetchData(data);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchData();
  }, [fetchUrl]);

  return {fetchData, error};
}

export default useFetch;
