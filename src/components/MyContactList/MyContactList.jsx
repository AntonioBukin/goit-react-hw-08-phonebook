import { useSelector } from 'react-redux';
import css from './my-contact-list.module.scss';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { ContactItem } from 'components/MyContactItem/MyContactItem';

function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contacts}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} phone={number} /> //phone
      ))}
    </ul>
  );
}

export default ContactList;
