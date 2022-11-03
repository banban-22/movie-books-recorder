/* import React, { useContext, useEffect, useReducer } from 'react';
import reducer from '../components/reducer/reducer';
import {
  SET_LOADING,
  SET_BOOKS,
  REMOVE_BOOKS,
  SET_MOVIES,
  REMOVE_MOVIES,
  HANDLE_SEARCH,
  HANDLE_PAGE,
} from '../components/reducer/actions';

const API_ENDPOINT =
  'https://app.rakuten.co.jp/services/api/BooksForeignBook/Search/20170404?format=json';
const API_ID = `${process.env.REACT_APP_BOOKS_API_KEY}`;
// https://app.rakuten.co.jp/services/api/BooksForeignBook/Search/20170404?format=json&title=potter&booksGenreId=005407&applicationID=1057440284976572380
// https://app.rakuten.co.jp/services/api/BooksForeignBook/Search/20170404?format=json&title=Potter&booksGenreId=005407&applicationId=1057440284976572380
// https://app.rakuten.co.jp/services/api/BooksForeignBook/Search/20170404?format=json&title=potter&booksGenreId=005407&applicationID=1057440284976572380

const initState = {
  isLoading: true,
  Item: [],
  title: 'potter',
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const fetchBooks = async (url) => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({
        type: SET_BOOKS,
        payload: { Item: data.Item },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeBooks = (id) => {
    dispatch({ type: REMOVE_BOOKS, payload: id });
  };

  const handleSearch = (query) => {
    dispatch({ type: HANDLE_SEARCH, payload: query });
  };

  const handlePage = (value) => {
    dispatch({ type: HANDLE_PAGE, payload: value });
  };

  useEffect(() => {
    fetchBooks(
      `${API_ENDPOINT}&title=${state.title}&booksGenreId=005407&applicationID=1057440284976572380`
    );
  }, [state.title]);

  return (
    <AppContext.Provider
      value={{ ...state, removeBooks, handleSearch, handlePage }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
 */
