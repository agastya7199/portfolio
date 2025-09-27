import { createPortal } from 'react-dom';
import { useState, forwardRef, useImperativeHandle, useRef, useEffect } from 'react';
import ProgressBar from './ProgressBar.jsx';
import classes from './Modal.module.css';

const TIMER = 4000;
const Modal = forwardRef(function ({}, ref) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dialogRef = useRef();
    useEffect(() => {
        let timeOut;
        if (isModalOpen) {
            timeOut = setTimeout(() => {
                closeDialogBox();
            }, TIMER);
        }
        return () => {
            clearTimeout(timeOut);
        };
    }, [isModalOpen]);

    useImperativeHandle(ref, () => {
        return {
            open: () => {
                dialogRef.current.showModal();
                setIsModalOpen(true);
            },
        };
    });

    function closeDialogBox() {
        dialogRef.current.close();
        setIsModalOpen(false);
    }

    return createPortal(
        <dialog ref={dialogRef} onClose={closeDialogBox} className={classes.modal}>
            {isModalOpen && (
                <div className={classes.modalContent}>
                    <h3 className={classes.succesHeading}>✅ Email sent successfully!</h3>
                    <p className={classes.successMessage}>
                        Thanks for reaching out! I’ll get back to you shortly.
                    </p>
                    <div className={classes.progressSection}>
                        <ProgressBar timer={TIMER} />
                        <button onClick={closeDialogBox} className={classes.closeButton}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </dialog>,
        document.getElementById('root')
    );
});

export default Modal;
