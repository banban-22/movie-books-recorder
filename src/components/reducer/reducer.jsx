import {
  SET_LOADING,
  SET_BOOKS,
  REMOVE_BOOKS,
  SET_MOVIES,
  REMOVE_MOVIES,
  HANDLE_SEARCH,
  HANDLE_PAGE,
} from './actions';

/* const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };

    case SET_BOOKS:
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };

    case REMOVE_BOOKS:
      return {
        ...state,
        hits: state.hits.filter((book) => book.item.isbn !== action.payload),
      };

    case HANDLE_SEARCH:
      return { ...state, query: action.payload, page: 0 };

    case HANDLE_PAGE:
      if (action.payload === 'inc') {
        let nextPage = state.page + 1;
        if (nextPage > state.nbPages - 1) {
          nextPage = 0;
        }
        return { ...state, page: nextPage };
      }

      if (action.payload === 'dec') {
        let prevPage = state.page - 1;
        if (prevPage < 0) {
          prevPage = state.nbPages - 1;
        }
        return { ...state, page: prevPage };
      } 

    default:
      throw new Error(`no matching "${action.type}" action type`);
  }
};

export default reducer;*/