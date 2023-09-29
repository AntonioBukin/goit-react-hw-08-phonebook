import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from '../hooks';
import { refreshUser } from 'redux/auth/operations';

const RegisterPage = lazy(() => import('pages/RegisterPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

// import { ToastContainer } from 'react-toastify';
// import MyContactForm from './MyContactForm/MyContactForm.jsx';
// import MyContactList from './MyContactList/MyContactList.jsx';
// import Filter from './Filter/Filter.jsx';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from 'redux/operations.js';
// import { selectError, selectIsLoading } from 'redux/selectors.js';

// export function App() {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);
//   return (
//     <div>
//       <h1>My Phone contacts list</h1>
//       <MyContactForm />
//       <h2>Find contacts by name</h2>
//       <Filter />
//       <div
//         style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
//       >
//         {isLoading && !error && (
//           <b style={{ textAlign: 'center' }}> In progress ...</b>
//         )}
//       </div>
//       <MyContactList />
//       <ToastContainer />
//     </div>
//   );
// }
