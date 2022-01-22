import { useState } from "react";
import { useSelector } from "react-redux";
import { MovieQuality, MovieType } from "../../models/Filter";
import { closeFilterModal, setFilterOptions } from "../../store/movies/movies.slice";
import { RootState, useAppDispatch } from "../../store/store";
import { Modal } from "../modal/Modal";
import "./MoviesFilterModal.scss";

export const MoviesFilterModal = () => {
  const [movieType, setMovieType] = useState(MovieType.All);
  const [qualityType, setMovieQualityType] = useState(MovieQuality.All);
  const isFilterModalActive = useSelector((state: RootState) => state.movies.isFilterModalActive);
  const dispatch = useAppDispatch();

  const handleFilterSubmit = () => {
    dispatch(setFilterOptions({
        quality: qualityType,
        type: movieType
    }));

    dispatch(closeFilterModal());
  };

  return (
    <Modal open={isFilterModalActive}>
      <div className="Movies-Filter-Modal">
        <div className="Filter-Content">
            <div className="Filters">
            <div className="Filter">
            <div className="Title"> Film Type</div>
            <div className="Options">
              <div className="Checkbox-List">
                {Object.values(MovieType).map((type) => {
                  return (
                    <div className="Checkbox" key={type}>
                      <input
                        type="radio"
                        name={`type-${type}`}
                        value={type}
                        checked={movieType === type}
                        onChange={() => setMovieType(type)}
                      />
                      <span> { type } </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="Filter">
            <div className="Title"> Quality</div>
            <div className="Options">
            <div className="Checkbox-List">
                {Object.values(MovieQuality).map((quality) => {
                  return (
                    <div className="Checkbox" key={quality}>
                      <input
                        type="radio"
                        name={`quality-${quality}`}
                        value={quality}
                        checked={qualityType === quality}
                        onChange={() => setMovieQualityType(quality)}
                      />
                      <span> { quality } </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
            </div>

          <button className="Submit-Filter" onClick={handleFilterSubmit}>
                Filter Movies
          </button>
        </div>
      </div>
    </Modal>
  );
};
