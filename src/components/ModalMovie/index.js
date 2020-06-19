/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from "react";
import { MovieDetailContext } from "../../store/MovieDetail";
import { Modal } from "reactstrap";

const ModalMovie = () => {
  const {
    OpenWatchModel: { isOpenWatchModel },
    MovieWatch: { urlMovieWatch },
  } = React.useContext(MovieDetailContext);
  return (
    <div>
      <Modal isOpen={isOpenWatchModel}>
        <div class="embed-responsive embed-responsive-16by9">
          <iframe
            class="embed-responsive-item"
            src= {`https://www.youtube.com/embed/${urlMovieWatch}`}
            allowfullscreen
            title="Trailer"
          ></iframe>
        </div>
      </Modal>
    </div>
  );
};

export default ModalMovie;
