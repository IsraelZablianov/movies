import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import moviesApi from './movies/movies.api';
import moviesSlice from './movies/movies.slice';

const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    [moviesSlice.name]: moviesSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store