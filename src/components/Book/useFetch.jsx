import { useState, useEffect } from 'react';

const API_ENDPOINT =
  'https://app.rakuten.co.jp/services/api/BooksForeignBook/Search/20170404?format=json';
const API_ID = process.env.REACT_APP_BOOKS_API_KEY;

const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: '' });
  const [data, setData] = useState(null);

  const fetchBook = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
      console.log(setData(data));
      setError({ show: false, msg: '' });
      console.log(setError({ show: false, msg: '' }));

      // if (data.Items > 0) {
      //   setData(data.Items || data);
      //   setError({ show: false, msg: '' });
      // } else {
      //   setError({ show: true, msg: data.Error });
      // }
      // setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchBook(`${API_ENDPOINT}${API_ID}${urlParams}`);
    }, 500);

    return () => clearTimeout(timer);
  }, [urlParams]);

  return { isLoading, error, data };
};

export default useFetch;
