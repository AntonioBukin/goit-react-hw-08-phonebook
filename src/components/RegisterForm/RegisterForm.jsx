import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Button, Form, Label, TextWrapper } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        <TextWrapper>Username</TextWrapper>
        <input type="text" name="name" />
      </Label>
      <Label>
        <TextWrapper>Email</TextWrapper>
        <input type="text" name="email" />
      </Label>
      <Label>
        <TextWrapper>Password</TextWrapper>
        <input type="password" name="password" />
      </Label>
      <Button type="submit">Register</Button>
    </Form>
  );
};