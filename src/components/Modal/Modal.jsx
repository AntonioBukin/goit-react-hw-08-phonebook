import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from 'redux/contacts/contactsSlice';
import { selectShowModal } from 'redux/contacts/selectors';
import { Overlay, ModalBox } from './Modal.styled.jsx';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children }) => {
  const dispatch = useDispatch();
  const showModal = useSelector(selectShowModal);

  const handleToggleModal = useCallback(() => {
    dispatch(toggleModal());
  }, [dispatch]);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        handleToggleModal();
      }
    };
    if (showModal) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showModal, handleToggleModal]);
  if (!showModal) {
    return null;
  }

  return createPortal(
    <Overlay>
      <ModalBox>{children} </ModalBox>
    </Overlay>,
    modalRoot
  );
};