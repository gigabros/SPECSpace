import { useState } from 'react';

const FeedbackModal = ({ isOpen, onClose, children }) => {
  const [modalStyle, setModalStyle] = useState({
    opacity: 1
  });

  if (!isOpen) {
    return null;
  }

  const closeModal = () => {
    setModalStyle({ ...modalStyle, opacity: 0 });
    setTimeout(() => {
      onClose();
    }, 300);
  }

  return (
    <>
      <div className="modal-overlay" onClick={closeModal}></div>
      <div className="modal-content" style={modalStyle}>
        {children}
        <button onClick={closeModal} className='confirm-button'>Okay</button>
      </div>
    </>
  );
}

export default FeedbackModal;
