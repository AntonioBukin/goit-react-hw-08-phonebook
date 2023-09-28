import { useSelector, useDispatch } from 'react-redux';
import css from './filter.module.scss';
import { filterContacts } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChangeFilter = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };
  return (
    <label className={css.filterTitle}>
      <input
        className={css.filterInput}
        type="text"
        value={filter}
        onChange={handleChangeFilter}
        placeholder="search"
      />
    </label>
  );
};

export default Filter;
