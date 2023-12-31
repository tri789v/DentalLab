import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import { ToastError, Toastify, ToastInfo, ToastSuccess } from '../utils/Toastify';
import { anonymousApiInstance } from '../utils/ApiInstance';
import { LOGIN_URL } from '../utils/constants';
import MenuNavbar from '../components/MenuNavbar';
import Footer from '../components/Footer';

const SignUp = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()


  const handleLogin = async (e) => {
    e.preventDefault();

    if (username === '' || password === '') {
      await ToastError('Form should not be empty')
      return;
    }

    const payload = {
      username: username,
      password: password,
    };

    try {
      const response = await anonymousApiInstance.post(LOGIN_URL, payload);
      localStorage.setItem('token', response.data);
      navigate('/')
      await ToastSuccess('Sign in successfully')
    } catch (err) {
      setUsername('');
      setPassword('');
      await ToastError(err.response?.data['title'])
    }
  }

  return (
    <>
      <MenuNavbar />
      <div className="flex min-h-full justify-center px-6 py-12 lg:px-8 m-20">
        <form onSubmit={handleLogin} className="container">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            {/* <img
            className="mx-auto h-10 w-auto"
            src="/avatarUser.png"
            alt="Your Company"
          /> */}
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Đăng ký một tài khoản
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="space-y-6">
              <div>
                <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
                  Tài khoản
                </label>
                <div className="mt-2">
                  <input
                    value={username} onChange={e => setUsername(e.target.value)}
                    className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Mật khẩu
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Quên mật khẩu?
                    </a>
                  </div>
                </div>
                <div className="mt-2">

                  <input
                    type="password" value={password} onChange={e => setPassword(e.target.value)}
                    className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Đăng nhập
                </button>
              </div>
            </div>

            <p className="mt-10 text-center text-sm text-gray-500">
              Đã có tài khoản?{' '}
              <a href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Đăng nhập
              </a>
            </p>
          </div>
        </form>
      </div>
    </>
  )
}

export default SignUp;