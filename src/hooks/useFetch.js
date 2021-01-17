import axios from 'axios';
import {useState, useEffect} from 'react';
import wait from 'waait';

function useFetch(url, config) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchData() {
    await wait(2000);
    setLoading(true);
    const {data: serverData} = await axios
      .get(url, config)
      .catch((serverError) => {
        setLoading(false);
        setError(serverError);
      });

    setLoading(false);
    setData(serverData);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {data, loading, error, fetchData};
}
export {useFetch};
