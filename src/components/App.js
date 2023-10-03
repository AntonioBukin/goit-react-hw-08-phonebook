import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from '../hooks';
import { refreshUser } from 'redux/auth/operations';
import Loader from './Loader/Loader';
import { Layout } from './Layout/Layout.jsx';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const RegisterPage = lazy(() => import('pages/register/RegisterPage.jsx'));
const LoginPage = lazy(() => import('pages/login/LoginPage.jsx'));
const HomePage = lazy(() => import('pages/home/HomePage.jsx'));
const PageNotFound = lazy(() =>
  import('../pages/pageNotFound/pageNotFound.jsx')
);
const ContactsPage = lazy(() => import('pages/contacts/ContactsPage.jsx'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader width={96} />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route path="*" element={<PageNotFound />} />
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
