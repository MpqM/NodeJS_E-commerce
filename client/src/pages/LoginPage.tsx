import { useNavigate } from 'react-router-dom';
import Login from '../components/Auth/Login'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { RootState } from '../redux/store';

const LoginPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated} = useSelector((state: RootState) => state.auth);

  useEffect(() => { if (isAuthenticated) { navigate("/"); } }, [isAuthenticated])

  return (
    <div>
      <Login />
    </div>
  )
}

export default LoginPage