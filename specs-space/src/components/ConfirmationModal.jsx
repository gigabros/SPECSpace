import React, { useState } from 'react';

const ConfirmationModal = ({ message, onConfirm, buttonLabel, buttonClassName, confirmIcon }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
        // onCancel();
    };

    const handleConfirm = () => {
        setIsOpen(false);
        onConfirm();
    };

    return (
        <>
            <button className={buttonClassName} onClick={handleOpenModal}>{buttonLabel}</button>
            {isOpen && (
                <div className="confirm-modal">
                    <div className="confirm-modal-content">
                        <div className="confirm-icon-holder">
                            {confirmIcon}
                        </div>
                        <p>{message}</p>
                        <div className="confirm-btn">
                            <button onClick={handleConfirm} className='confirm-button'>Confirm</button>
                            <button onClick={handleCloseModal} className='confirm-cancel-button'>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ConfirmationModal;
