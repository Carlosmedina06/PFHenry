import { ERROR, GET_USERS, GET_SEARCH_BOOK } from '../actions';

const initialState = {
  books: [],
  allBooks: [],
  detail: [],
  category: [],
  users: [],
  error: [],
};

function rootReducer(state = initialState, action) {
  let allCateg = state.allBooks;
  let categFilter =
    action.payload === 'todos'
      ? allCateg
      : allCateg.filter(c => c.category?.includes(action.payload));

  let bookSort =
    action.payload === 'asc'
      ? state.books.sort((a, b) =>
          a.title > b.title ? 1 : a.title < b.title ? -1 : 0
        )
      : state.books.sort((a, b) =>
          a.title > b.title ? -1 : a.title < b.title ? 1 : 0
        );

  switch (action.type) {
    case 'GET_BOOKS':
      return {
        ...state,
        books: action.payload,
        allBooks: action.payload,
      };
    case 'GET_SEARCH_BOOK':
      return {
        ...state,
        books: action.payload,
      };
    case 'GET_ALL_GENEROS':
      return {
        ...state,
        category: action.payload,
      };
    case 'FILTER_CATEGORY':
      return {
        ...state,
        books: categFilter,
      };
    case 'ORDER_ALF':
      return {
        ...state,
        books: bookSort,
      };
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;

/* export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    USERS: [],
    users: [],
    user: {},
    error: {},
  },
  reducers: {
    getAllUsers: (state, action) => {
      state.users = action.payload
      state.USERS = action.payload
    },
    getUserById: (state, action) => {
      state.user = action.payload
    },
    userError: (state, action) => {
      state.error = action.payload
    },
  },
}) */
