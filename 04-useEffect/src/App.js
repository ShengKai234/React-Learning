import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

  // re-render every time
  // if (storedUserLoggedInInformation === '1') {
  //   setIsLoggedIn(true)
  // }

  // execute by react
  // important: it is executed after every component re-evaluation, 
  // but it will not just run after every component eveluation
  useEffect(() => {
    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true)
    }
  }, []) // but only if the dependencies is chagned -> [], no dependencies, so only run first (nothing change)

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
