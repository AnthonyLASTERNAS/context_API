import React, { useState } from 'react';
import './App.css';
import UserProfile from './components/UserProfile';
import UserContext from './contexts/UserContext';

function App() {
  const [isOnLine, setIsOnLine] = useState(false);

  return (
    <UserContext.Provider value={{ isOnLine, setIsOnLine }}>
      <UserProfile />
    </UserContext.Provider>
  );
}

export default App;
