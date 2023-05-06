import { useState } from 'react';

const FeedbackModal = ({ fbckIcon, message, onClose }) => {

  return (
    <>
      <div className="fbck-modal-overlay" onClick={onClose}>
        <div className="fbck-modal-content">
          <div className="fbck-icon-holder">
            {fbckIcon}
          </div>
          <p className='fbck-msg'>{message}</p>
          <button onClick={onClose} className='fbck-cls-button'>Close</button>
        </div>
      </div>
    </>
  );
}

export default FeedbackModal;
