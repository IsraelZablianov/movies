import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Movie } from '../../models/Movie';

// Todo: use .env
const baseUrl = 'http://localhost:3001/';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getMovies: builder.query<Movie[], void>({
      query: () => 'movies',
    }),
    getMovie: builder.query<Movie[], string>({
        query: (id) => `movies/${id}`,
      }),
  }),
})

export const { useGetMovieQuery, useGetMoviesQuery } = moviesApi;
export default moviesApi;