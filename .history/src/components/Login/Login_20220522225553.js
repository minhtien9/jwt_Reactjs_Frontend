import React from 'react'

const Login = (props) => {
    return (
        <div className='login-container'>
            <div className='container'>
                <div className='row'>
                    <div className='content-left col-7'>
                        <div className='brand'>Hoi Dan IT</div>
                        <div className='detail'>
                            Hoi Dan IT helps you connect and share with the
                            people in your life.
                        </div>
                    </div>
                    <div className='content-right col-5'>
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
                        <button className='btn btn-primary'>Login</button>
                        <span>Forgot your password?</span>
                        <hr />
                        <div>
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

export default Login
