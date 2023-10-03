import { NavLink } from 'components/Navigation/Navigation.styled';
import { HomePageImage, Wrapper } from './HomePage.styled';

const HomePage = () => {
  return (
    <Wrapper>
      <NavLink to="/contacts">
        <HomePageImage />
      </NavLink>
    </Wrapper>
  );
};

export default HomePage;