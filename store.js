// import { configureStore } from 'redux';
// // action types
// export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
// export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
// export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';



// // initial state
// const initialState = {
//   loading: false,
//   movies: [],
//   error: null
// };

// // reducer
// const movieReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_MOVIES_REQUEST:
//       return {
//         ...state,
//         loading: true,
//         error: null
//       };
//     case FETCH_MOVIES_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         movies: action.payload,
//         error: null
//       };
//     case FETCH_MOVIES_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         movies: [],
//         error: action.payload
//       };
//     default:
//       return state;
//   }
// };

// // create store
//  store = configureStore(movieReducer);

// export default store;


import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    loading: false,
    movies: [],
    error: null
  },
  reducers: {
    FETCH_MOVIES_REQUEST: state => {
      state.loading = true,
      state.error = null
    },
    FETCH_MOVIES_SUCCESS: (state, action) => {
      state.loading = false,
      state.error = null,
      state.movies = action.payload
    },
    FETCH_MOVIES_FAILURE: (state, action) => {
      state.loading = false,
      state.error = action.payload,
      state.movies = []
    }
  }
})

export const { FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE } = movieSlice.actions

export default configureStore({
  reducer: {
    movie: movieSlice.reducer
  }
})