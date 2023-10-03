import { useAuth } from 'hooks';
import { Header } from './AppBar.styled';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { NavbarAuth } from 'components/NavbarAuth/NavbarAuth';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <NavbarAuth />}
    </Header>
  );
};