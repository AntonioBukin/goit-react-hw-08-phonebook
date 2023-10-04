import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors.js';
import { filterContacts } from 'redux/contacts/filterSlice';
import { FilterInput, Icon, FilterTitle } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChangeFilter = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };
  return (
    <FilterTitle>
      <Icon size="18" />
      Find contacts by name
      <FilterInput
        type="text"
        value={filter}
        onChange={handleChangeFilter}
        placeholder="search"
      />
    </FilterTitle>
  );
};

export default Filter;

// import { useSelector, useDispatch } from 'react-redux';
// import css from './filter.module.scss';
// import { filterContacts } from 'redux/contacts/filterSlice';
// import { selectFilter } from 'redux/contacts/selectors';

// const Filter = () => {
//   const dispatch = useDispatch();
//   const filter = useSelector(selectFilter);

//   const handleChangeFilter = e => {
//     dispatch(filterContacts(e.currentTarget.value));
//   };
//   return (
//     <label className={css.filterTitle}>
//       <input
//         className={css.filterInput}
//         type="text"
//         value={filter}
//         onChange={handleChangeFilter}
//         placeholder="search"
//       />
//     </label>
//   );
// };

// export default Filter;
