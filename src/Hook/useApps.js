import { useEffect, useState } from 'react'
const useApps = () => {
  const [apps, setapps] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    setLoading(true)
    axios('/AppData.json')
      .then(data => setapps(data.data))
      .catch(err => setError(err))
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  }, []);
  return { apps, loading, error }
};

export default useApps;













