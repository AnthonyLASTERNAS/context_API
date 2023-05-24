import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext';

function UserProfile() {
  const { isOnLine, setIsOnLine } = useContext(UserContext);
  const handleClick = () => {
    setIsOnLine(!isOnLine);
  };

  return (
    <>
      <div>
        User is
        {isOnLine ? ' OnLine' : ' OffLine'}
      </div>
      <button onClick={handleClick}>click to change user status</button>
    </>
  );
}

export default UserProfile;
