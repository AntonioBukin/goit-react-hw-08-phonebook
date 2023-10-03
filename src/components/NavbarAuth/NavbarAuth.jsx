import { NavLink } from './AuthNav.styled';

export const NavbarAuth = () => {
  return (
    <div>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </div>
  );
};
