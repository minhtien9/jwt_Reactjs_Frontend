import React from 'react'

const Login = (props) => {
    return (
        <div className='login-container'>
            <div className='container'>
                <div className='row'>
                    <div className='content-left'>
                        <div className='brand'>Hoi Dan IT</div>
                        <div className='detail'>
                            Hoi Dan IT helps you connect and share with the
                            people in your life.
                        </div>
                    </div>
                    <div className='content-right'>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
