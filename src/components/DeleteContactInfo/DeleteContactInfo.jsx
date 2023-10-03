import { useDispatch } from 'react-redux';
import { toggleModal } from 'redux/contacts/contactsSlice';
import { deleteContact } from 'redux/contacts/operations';
import {
  ButtonNo,
  ButtonOk,
  ButtonWrapper,
  DeleteWarning,
  ModalWrapper,
  Text,
} from './DeleteContactInfo.styled';

export const DeleteContactInfo = ({ id }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
    dispatch(toggleModal(id));
  };
  const handleCloseModal = () => {
    dispatch(toggleModal(id));
  };
  return (
    <DeleteWarning>
      <ModalWrapper>
        <Text>Are you sure you want to delete this contact?</Text>
        <ButtonWrapper>
          <ButtonOk type="button" onClick={handleDeleteContact}>
            OK
          </ButtonOk>
          <ButtonNo type="button" onClick={handleCloseModal}>
            No
          </ButtonNo>
        </ButtonWrapper>
      </ModalWrapper>
    </DeleteWarning>
  );
};