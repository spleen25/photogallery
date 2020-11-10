import { useState, useEffect } from 'react';

const useDataFetcher = (getMethod, params) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getResource() {
    try {
      setLoading(true);
      const result = await getMethod(params);
      setData(result.data);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getResource();
  }, []);

  return [data, loading, error];
};

export default useDataFetcher;
