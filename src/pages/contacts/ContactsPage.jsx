import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import {
  selectDeleteId,
  selectError,
  selectIsLoading,
  selectShowModal,
} from 'redux/contacts/selectors';
import ContactForm from 'components/MyContactForm/MyContactForm.jsx';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/MyContactList/MyContactList.jsx';
import { Modal } from 'components/Modal/Modal.jsx';
import { DeleteContactInfo } from 'components/DeleteContactInfo/DeleteContactInfo.jsx';
import { Wrapper, Title, PhonebookWrapper } from './ContactsPage.styled.jsx';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const showModal = useSelector(selectShowModal);
  const deleteId = useSelector(selectDeleteId);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <PhonebookWrapper>
        <ContactForm />
        <Title>Contacts</Title>
        <Filter />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '10px',
          }}
        ></div>
        {isLoading && !error && (
          <b style={{ textAlign: 'center' }}>Request in progress...</b>
        )}

        <ContactList />
        {showModal && (
          <Modal>
            <DeleteContactInfo id={deleteId} />
          </Modal>
        )}
      </PhonebookWrapper>
    </Wrapper>
  );
};

export default ContactsPage;
