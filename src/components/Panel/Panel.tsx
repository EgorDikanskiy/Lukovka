import { observer } from 'mobx-react-lite';
import React, { useCallback } from 'react';
import { useNavigate, Link, useLocation, useMatch } from 'react-router-dom';
import { routerUrls } from 'config/routerUrls';
import styles from './Panel.module.scss';

const getProfileColor = () => {
  switch (location.pathname) {
    case routerUrls.login.mask:
      return '#DA251F';
    case routerUrls.register.mask:
      return '#DA251F';
    case routerUrls.profile.mask:
      return '#DA251F';
    default:
      return '#151411';
  }
};

const Panel: React.FC = observer(() => {
  const navigate = useNavigate();

  const handleProfileClick = useCallback(() => {
    navigate(routerUrls.profile.mask);
  }, [navigate]);

  const profileColor = getProfileColor();
  return (
    <div>
      <div className={styles.panel}>
        <button className={styles.panel__button} onClick={handleProfileClick}>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 15C18.4518 15 21.25 12.2018 21.25 8.75C21.25 5.29822 18.4518 2.5 15 2.5C11.5482 2.5 8.75 5.29822 8.75 8.75C8.75 12.2018 11.5482 15 15 15Z"
              stroke={profileColor}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M25.7374 27.5C25.7374 22.6625 20.9249 18.75 14.9999 18.75C9.07495 18.75 4.26245 22.6625 4.26245 27.5"
              stroke={profileColor}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
});

export default Panel;
