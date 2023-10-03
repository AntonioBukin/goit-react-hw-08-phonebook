import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';
import { Form, Label, TextWrapper, Button } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        <TextWrapper>Email</TextWrapper>
        <input type="text" name="email" />
      </Label>
      <Label>
        <TextWrapper>Password</TextWrapper>
        <input type="password" name="password" />
      </Label>
      <Button type="submit">Log In</Button>
    </Form>
  );
};