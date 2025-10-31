import { FC } from 'react';
import { AppHeaderUI } from '@ui';
import { useNavigate } from 'react-router-dom';
import { useSelector } from '../../services/store';
import { selectIsAuthenticated, selectUser } from '@selectors';

export const AppHeader: FC = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const handleFeedClick = () => {
    navigate('/feed');
  };

  const handleCombinerClick = () => {
    navigate('/');
  };

  const handleProfileClick = () => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      navigate('/profile');
    }
  };

  return (
    <AppHeaderUI
      userName={isAuthenticated ? user?.name || '' : ''}
      onFeedClick={handleFeedClick}
      onCombinerClick={handleCombinerClick}
      onProfileClick={handleProfileClick}
    />
  );
};
