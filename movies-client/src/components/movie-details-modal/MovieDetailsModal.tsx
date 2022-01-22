import { skipToken } from "@reduxjs/toolkit/query";
import { useSelector } from "react-redux";
import HTMLReactParser from 'html-react-parser'
import { useGetMovieQuery } from "../../store/movies/movies.api";
import { RootState, useAppDispatch } from "../../store/store";
import { Modal } from "../modal/Modal";
import { ReactComponent as Star } from "../../assets/images/star.svg";
import "./MovieDetailsModal.scss";
import { Button } from "../button/Button";
import { ReactComponent as Arrow } from "../../assets/images/back-arrow.svg";
import { setSelectedMovieId } from "../../store/movies/movies.slice";

const MISSING_VALUE = "N/A";

export const MovieDetailsModal = () => {
  const dispatch = useAppDispatch();

  const selectedMovieId = useSelector(
    (state: RootState) => state.movies.selectedMovieId
  );
  const selectedMovie = useGetMovieQuery(selectedMovieId || skipToken, {
    selectFromResult: ({ currentData }) => {
      const [selectedMovie] = currentData || [];
      return selectedMovie;
    },
  });

  const handleBackClick = () => {
    dispatch(setSelectedMovieId(null));
  };

  const durationFormatter = (duration?: string) => {
    return duration?.replaceAll('h', 'h ').replaceAll('m', 'min');
  };

  return (
    <Modal open={!!selectedMovie && !!selectedMovieId}>
      <div className="Movie-Details-Modal">
        <div className="Movie-Details">
          <div className="Image Panel">
            <img src={selectedMovie?.largeimage} alt={selectedMovie?.title} />
          </div>
          <div className="Details-Container Panel">
          <div className="Details">
            <div className="Title">{selectedMovie?.title || MISSING_VALUE}</div>
            <div className="Duration">
              {durationFormatter(selectedMovie?.runtime) || MISSING_VALUE}
            </div>
            <div className="Rating">
              <Star />
              <span> {selectedMovie?.rating || MISSING_VALUE}/10 </span>
            </div>
            <div className="Synopsis">
              {selectedMovie?.synopsis ? HTMLReactParser(selectedMovie?.synopsis) : MISSING_VALUE}
            </div>
          </div>
          <div className="Go-Back-Button">
          <Button
              text="Back to list"
              icon={<Arrow />}
              onClick={handleBackClick}
            ></Button>
          </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
