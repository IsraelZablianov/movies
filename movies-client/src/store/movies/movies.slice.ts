import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FilterOptions } from '../../models/Filter';

export interface MoviesState {
  selectedMovieId: string | null;
  filterOptions: Partial<FilterOptions>;
  isFilterModalActive: boolean;
}

const initialState: MoviesState = {
    selectedMovieId: null,
    filterOptions: {},
    isFilterModalActive: false
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSelectedMovieId: (state, action: PayloadAction<string | null>) => {
      state.selectedMovieId = action.payload;
    },
    setFilterOptions: (state, action: PayloadAction<Partial<FilterOptions>>) => {
      state.filterOptions = {
        ...state.filterOptions,
        ...action.payload
      };
    },
    openFilterModal: (state) => {
      state.isFilterModalActive = true;
    },
    closeFilterModal: (state) => {
      state.isFilterModalActive = false;
    },
  },
})

export const { setSelectedMovieId, setFilterOptions, openFilterModal, closeFilterModal } = moviesSlice.actions
export default moviesSlice;
