import { ToastContainer } from 'react-toastify';
import MyContactForm from './MyContactForm/MyContactForm.jsx';
import MyContactList from './MyContactList/MyContactList.jsx';
import Filter from './Filter/Filter.jsx';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations.js';
import { selectError, selectIsLoading } from 'redux/selectors.js';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1>My Phone contacts list</h1>
      <MyContactForm />
      <h2>Find contacts by name</h2>
      <Filter />
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      >
        {isLoading && !error && (
          <b style={{ textAlign: 'center' }}> In progress ...</b>
        )}
      </div>
      <MyContactList />
      <ToastContainer />
    </div>
  );
}
