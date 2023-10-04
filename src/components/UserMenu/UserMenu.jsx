import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { Avatar, Badge, Chip } from '@mui/material';
import { logOut } from 'redux/auth/operations';
import { Wrapper } from './UserMenu.styled';
import { keyframes } from '@emotion/react';

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <Wrapper>
      <p>Welcome, {user.name}</p>
      <Chip
        avatar={
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
            color="secondary"
            sx={{
              animation: `${pulseAnimation} 1.5s infinite`,
            }}
          >
            <Avatar
              alt="avatar"
              src={`https://source.unsplash.com/1200x1200?${user.name}`}
              sx={{ width: 24, height: 24 }}
            />
          </Badge>
        }
        label="LogOut"
        variant="outlined"
        onClick={handleLogOut}
        sx={{
          border: '1px solid #dfcece',
          color: '#000000',
          textShadow: '-1px -1px 1px #ffffff31, 1px 1px 1px #00000031',
          boxShadow: 3,
        }}
      />
    </Wrapper>
  );
};
