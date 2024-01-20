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
    <div className="min-h-screen flex flex-col justify-center p-3">
      {/* 제목, 부제목 */}
      <div>
        <h1 className="mx-auto w-full max-w-md text-center text-3xl font-bold mb-3"> E-COMMERCE </h1>
        <h1 className="mx-auto w-full max-w-md text-center text-3xl font-bold mb-3"> 로그인 </h1>
      </div>
      {/* 로그인 폼 */}
      <div className="mx-auto w-full max-w-md p-5 rounded-md border-[1px] border-black">
        <form onSubmit={handleSubmit} className="space-y-5" >
          {/* 이메일 입력 */}
          <div>
            <label htmlFor="email" className='block text-sm mb-1'> 이메일 </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email} type="email" name='email' autoComplete='email' required
              className='appearance-none block w-full p-3 shadow rounded-md focus:outline-none focus:ring-1 focus:ring-black'
            />
          </div>

          {/* 비밀번호 입력 */}
          <div>
            <label htmlFor="password" className='block text-sm mb-1'> 비밀번호 </label>
            <div className='relative'>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password} type={visible ? "text" : "password"} name='password' autoComplete='current-password' required
                className='appearance-none block w-full p-3 shadow rounded-md focus:outline-none focus:ring-1 focus:ring-black'
              />
              {visible
                ? (<AiOutlineEye onClick={() => setVisible(false)} size={25} className='absolute right-3 top-3 cursor-pointer' />)
                : (<AiOutlineEyeInvisible onClick={() => setVisible(true)} size={25} className='absolute right-3 top-3 cursor-pointer' />)
              }
            </div>
          </div>

          {/* 자동로그인 ID/PW 찾기 */}
          <div className='flex items-center justify-between'>
            <div className='flex items-center hover:opacity-30 space-x-1'>
              <input type="checkbox" name='remember-me' id='remember-me' />
              <label htmlFor="remember-me">자동로그인</label>
            </div>
            <div className='flex items-center hover:opacity-50'> <a href="/forgot-password">아이디 ∙ 비밀번호 찾기</a> </div>
          </div>

          {/* 로그인, 회원가입 버튼 */}
          <div className='space-y-3'>
            <button type="submit" className='w-full h-[40px] flex justify-center items-center p-2 rounded-md border-[1px] border-black hover:opacity-30'>로그인 </button>
            <Link to="/signup" className='w-full h-[40px] flex justify-center items-center p-2 rounded-md border-[1px] border-black hover:opacity-30'>회원가입</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login