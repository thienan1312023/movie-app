/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from "react";
import { MovieDetailContext } from "../../store/MovieDetail";
import { Modal } from "reactstrap";

const ModalMovie = () => {
  const {
    OpenWatchModel: { isOpenWatchModel, setIsOpenWatchModal },
    MovieWatch: { urlMovieWatch },
  } = React.useContext(MovieDetailContext);
  return (
    <div>
      <Modal isOpen={isOpenWatchModel} toggle={() => setIsOpenWatchModal(false)} size="lg">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            class="embed-responsive-item"
            src= {`https://www.youtube.com/embed/${urlMovieWatch}`}
            allowfullscreen
            title="Trailer"
            frameBorder="0"
            // eslint-disable-next-line react/jsx-no-duplicate-props
            allowfullscreen
          ></iframe>
        </div>
      </Modal>
    </div>
  );
};

export default ModalMovie;
