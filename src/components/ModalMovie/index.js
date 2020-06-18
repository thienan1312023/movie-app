/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Modal } from 'reactstrap';

const ModalMovie = ({ EmbededUrl, isOpen, title }) => {
    return (
        <div>
            <Modal isOpen={isOpen}>
                <iframe src={EmbededUrl} title={title}/>
            </Modal>
        </div>
    );
}

export default ModalMovie;