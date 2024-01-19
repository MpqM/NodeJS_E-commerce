import { useNavigate } from 'react-router-dom';
import Signup from '../components/Auth/Signup'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useEffect } from 'react';

const SignupPage = () => {
    const navigate = useNavigate();
    const { isAuthenticated} = useSelector((state: RootState) => state.auth);
  
    useEffect(() => { if (isAuthenticated) { navigate("/"); } }, [isAuthenticated])
    
    return (
        <div>
            <Signup />
        </div>
    )
}

export default SignupPage