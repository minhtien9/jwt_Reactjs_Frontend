import React, { useState } from 'react'
import './Register.scss'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

const Register = (props) => {
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    let history = useHistory()
    // const handleRegister = () => {
    //     history.push('./login')
    // }

    const handleRegister = () => {
        const userData = { email, phone, username, password, confirmPassword }
        console.log(userData)
    }

    const isValidInputs = () => {
        if (!email) {
        }
    }
    return (
        <div className='register-container '>
            <div className='container'>
                <div className='row px-3 px-sm-0'>
                    <div className='content-left col-12 d-none col-sm-7 d-sm-block'>
                        <div className='brand'>Hoi Dan IT</div>
                        <div className='detail'>
                            Hoi Dan IT helps you connect and share with the
                            people in your life.
                        </div>
                    </div>
                    <div className='content-right col-sm-5 col-12 d-flex flex-column gap-3 py-3'>
                        <div className='brand d-sm-none'>Hoi Dan IT</div>
                        <div className='form-group'>
                            <label htmlFor=''>Email</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Email address'
                                value={email}
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor=''>Phone number</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Phone number'
                                value={phone}
                                onChange={(event) =>
                                    setPhone(event.target.value)
                                }
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor=''>Username</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Username'
                                value={username}
                                onChange={(event) =>
                                    setUsername(event.target.value)
                                }
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor=''>Password</label>
                            <input
                                type='password'
                                className='form-control'
                                placeholder='Password'
                                value={password}
                                onChange={(event) =>
                                    setPassword(event.target.value)
                                }
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor=''>Re-enter Password</label>
                            <input
                                type='password'
                                className='form-control'
                                placeholder='Re-enter Password'
                                value={confirmPassword}
                                onChange={(event) =>
                                    setConfirmPassword(event.target.value)
                                }
                            />
                        </div>
                        <button
                            className='btn btn-primary'
                            onClick={() => handleRegister()}
                        >
                            Register
                        </button>
                        {/* <span className='text-center'>
                            <a className='forgot-password' href='#'>
                                Forgot your password?
                            </a>
                        </span> */}
                        <hr />
                        <div className='text-center'>
                            <button
                                className='btn btn-success'
                                onClick={() => handleRegister()}
                            >
                                Already've an account. Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
