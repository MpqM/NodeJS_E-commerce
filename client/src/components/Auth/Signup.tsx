import React, { ChangeEvent, FormEvent, useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { RxAvatar } from 'react-icons/rx'
import styles from '../../styles/styles';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { config, server } from '../../helpers/server';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [visible, setVisible] = useState(false);
    const [avatar, setAvatar] = useState<File | null>(null);

    // const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     const selectedFile = e.target.files && e.target.files[0];
    //     if (selectedFile) {
    //         setAvatar(selectedFile);
    //         console.log(selectedFile.name);
    //     } else {
    //         console.log('파일이 선택되지 않았습니다.');
    //     }
    // };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newForm = new FormData();
        newForm.append('name', name);
        newForm.append('email', email);
        newForm.append('password', password);
        // newForm.append('avatar', avatar!);
        try {
            const response = await axios.post(`${server}/auth/signup`, newForm, config)
            toast.success(response.data.result);
            setName('');
            setEmail('');
            setPassword('')
        } catch (error: any) { toast.error(error.response.data.message); }
    };

    return (
        <div className={`${styles.auth_container}`}>
            <div className={`${styles.auth_title}`}>
                <h1> E-COMMERCE </h1>
                <h1> 회원가입 </h1>
            </div>

            {/* 회원가입 폼 */}
            <form onSubmit={handleSubmit} className={`${styles.auth_form}`} >
                {/* 이름 입력 */}
                <div>
                    <label htmlFor="username" className={`${styles.n_input_label}`}> 이름 </label>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        value={name} type="text" name='text' autoComplete='name' required
                        className={`${styles.n_input}`}
                    />
                </div>

                {/* 이메일 입력 */}
                <div>
                    <label htmlFor="email" className={`${styles.n_input_label}`}> 이메일 </label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email} type="email" name='email' autoComplete='email' required
                        className={`${styles.n_input}`}
                    />
                </div>

                {/* 비밀번호 입력 */}
                <div>
                    <label htmlFor="password" className={`${styles.n_input_label}`}> 비밀번호 </label>
                    <div className="relative">
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password} type={visible ? "text" : "password"} name='password' autoComplete='current-password' required
                            className={`${styles.n_input}`}
                        />
                        <div className={`${styles.auth_visible} ${styles.n_hover}`}>
                            {visible
                                ? (<AiOutlineEye onClick={() => setVisible(false)} size={25} />)
                                : (<AiOutlineEyeInvisible onClick={() => setVisible(true)} size={25} />)
                            }
                        </div>
                    </div>
                </div>

                {/* 프로필업로드 */}
                {/* <div className="text-center">
                        <label htmlFor="avatar" className="block text-sm text-gray-700"></label>
                        <span className='inline-block h-16 w-16 rounded-full overflow-hidden'>
                            {avatar
                                ? (<img src={URL.createObjectURL(avatar)} alt="avatar" className='h-full w-full object-cover rounded-full' />)
                                : (<RxAvatar className="h-full w-full" />)
                            }
                        </span>
                        <label htmlFor="file-input" className='flex items-center justify-center px-4 py-2 border border-gray-200 rounded-md shadow-sm text-sm text-gray-700 bg-white hover:bg-gray-50'>
                            <span>프로필 이미지 업로드</span>
                            <input
                                type="file" name='avatar' id='file-input' accept='.jpg, .jpeg, .png'
                                onChange={handleFileInputChange}
                                className="sr-only"
                            />
                        </label>
                    </div> */}

                {/* 로그인, 회원가입 버튼 */}
                <div className="space-y-3">
                    <button type="submit" className={`${styles.n_btn}`}> 회원가입 </button>
                    <Link to="/login" className={`${styles.n_btn}`}> 로그인 </Link>
                </div>
            </form>
        </div>
    )
}

export default Signup