import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleModal } from 'redux/contacts/contactsSlice';
import {
  ContactData,
  ContactItemWrapper,
  ContactName,
  DeleteButton,
  DeleteIcon,
  FirstLetterBox,
} from './my-contact.styled';

export const ContactItem = ({ id, name, number, randomColor }) => {
  const dispatch = useDispatch();
  const handleToggleModal = () => dispatch(toggleModal(id));

  return (
    <ContactItemWrapper>
      <ContactData>
        <FirstLetterBox style={{ background: `${randomColor}` }}>
          {name[0]}
        </FirstLetterBox>
        <ContactName>
          {name}: {number}
        </ContactName>
        <DeleteButton type="button" onClick={() => dispatch(handleToggleModal)}>
          Delete <DeleteIcon size="16" />
        </DeleteButton>
      </ContactData>
    </ContactItemWrapper>
  );
};

ContactItem.propTypes = {
  //   id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  randomColor: PropTypes.string,
};

//_______________________
// import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
// import { TiUserDeleteOutline } from 'react-icons/ti';
// import { deleteContact } from 'redux/auth/operations';
// import css from './my-contact-item.module.scss';

// export const ContactItem = ({ id, name, phone }) => {
//   const dispatch = useDispatch();

//   const handleDeleteContact = () => {
//     dispatch(deleteContact(id));
//   };

//   return (
//     <li className={css.contacts__item}>
//       <p className={css.contacts__data}>
//         <span>
//           {name}: {phone}
//         </span>
//         <button
//           type="button"
//           className={css.btnDel}
//           onClick={handleDeleteContact}
//         >
//           Delete
//           <TiUserDeleteOutline size="16" className={css.icon} />
//         </button>
//       </p>
//     </li>
//   );
// };

// ContactItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired,
// };
