import { LoginForm } from 'components/LoginForm/LoginForm';
import { LoginBox, LoginTitle } from './LoginPage.styled';

const LoginPage = () => {
  return (
    <>
      <LoginTitle>Login</LoginTitle>
      <LoginBox>
        <LoginForm />
      </LoginBox>
    </>
  );
};

export default LoginPage;