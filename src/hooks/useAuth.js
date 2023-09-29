import { useSelector } from 'react-redux';
import {
  selectIsLoggeIn,
  selectIsRefreshing,
  selectUser,
} from 'redux/auth/selectors.js';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggeIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  return { isLoggedIn, isRefreshing, user };
};