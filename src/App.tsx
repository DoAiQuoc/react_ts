import { useAppSelector } from 'app/hooks';
import { Layout } from 'components/Common/Layout';
import Home from 'components/Layout/Home';
import { selectIsLoggedIn } from 'features/auth/authSlice';
import { LoginPage } from 'features/auth/pages/Login';
import LinkPage from 'features/link/page/LinkPage';
import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    } else {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<Home />}>
            <Route index element={<LinkPage />}></Route>
          </Route>
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
