import axios from 'axios';
import { FormEvent, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { server } from '../../helpers/server';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(`${server}/auth/login`, { email, password }, { withCredentials: true })
      toast.success('login successful');
      navigate("/")
      window.location.reload();
    } catch (error: any) { toast.error(error.response.data.message); }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center p-5 bg-white">
      {/* 제목, 부제목 */}
      <div>
        <h1 className="mx-auto w-full max-w-md text-center text-5xl text-black mb-3"> E-COMMERCE </h1>
        <h2 className="mx-auto w-full max-w-md text-center text-3xl text-black mb-3"> 로그인 </h2>
      </div>
      {/* 로그인 폼 */}
      <div className="mx-auto w-full max-w-md bg-white p-5 rounded-md border-[1px] border-black">  
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* 이메일 입력 */}
          <div>
            <label htmlFor="email" className='block text-sm text-black mb-1'> 이메일 </label>
            <input
              type="email" name='email' autoComplete='email' required value={email} onChange={(e) => setEmail(e.target.value)}
              className='appearance-none block w-full p-3 shadow rounded-md focus:outline-none focus:ring-1 focus:ring-black'
            />
          </div>

          {/* 비밀번호 입력 */}
          <div>
            <label htmlFor="password" className='block text-sm text-black mb-1'> 비밀번호 </label>
            <div className='relative'>
              <input
                type={visible ? "text" : "password"} value={password} name='password' autoComplete='current-password' required
                onChange={(e) => setPassword(e.target.value)}
                className='appearance-none block w-full p-3 shadow rounded-md focus:outline-none focus:ring-1 focus:ring-black'
              />
              {visible
                ? (<AiOutlineEye size={25} onClick={() => setVisible(false)} className='absolute right-3 top-3 cursor-pointer' />)
                : (<AiOutlineEyeInvisible size={25} onClick={() => setVisible(true)} className='absolute right-3 top-3 cursor-pointer' />)
              }
            </div>
          </div>

          {/* 자동로그인 ID/PW 찾기 */}
          <div className='flex items-center justify-between'>
            <div className='flex items-center hover:opacity-50'>
              <input type="checkbox" name='remember-me' id='remember-me' />
              <label htmlFor="remember-me" className='text-medium ml-1'>자동로그인</label>
            </div>
            <div className='flex items-center hover:opacity-50'> <a href=".forgot-password" className='text-medium'>아이디 ∙ 비밀번호 찾기</a> </div>
          </div>
          
          {/* 로그인, 회원가입 버튼 */}
          <div>
            <button type="submit" className='w-full h-[40px] flex justify-center p-2 text-medium rounded-md text-white bg-black hover:opacity-50 mb-3'>로그인 </button>
            <Link to="/signup" className='w-full h-[40px] flex justify-center p-2 text-medium rounded-md text-white bg-black hover:opacity-50'>회원가입</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login