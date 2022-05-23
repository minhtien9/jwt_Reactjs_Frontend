import React from 'react'
import './Register.scss'
import { useHistory } from 'react-router-dom'

const Register = (props) => {
    let history = useHistory()
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
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Email address or phone number'
                        />
                        <input
                            type='password'
                            className='form-control'
                            placeholder='Password'
                        />
                        <button className='btn btn-primary'>Register</button>
                        <span className='text-center'>
                            <a className='forgot-password' href='#'>
                                Forgot your password?
                            </a>
                        </span>
                        <hr />
                        <div className='text-center'>
                            <button className='btn btn-success'>
                                Create new account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
