import { useHistory } from 'react-router-dom'
import './Login.scss'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const Login = (props) => {
    const [valueLogin, setValueLogin] = useState('')
    const [password, setPassword] = useState('')

    const defaultObjValidInput = {
        isValidValueLogin: true,
        isValidPassword: true,
    }

    const [objValidInput, setObjValidInput] = useState(defaultObjValidInput)

    let history = useHistory()
    const handleCreateNewAccount = () => {
        history.push('./register')
    }

    const handleLogin = () => {
        setObjValidInput(defaultObjValidInput)

        if (!valueLogin) {
            setObjValidInput({
                ...defaultObjValidInput,
                isValidValueLogin: false,
            })
        }
        if (!password) {
            setObjValidInput({
                ...defaultObjValidInput,
                isValidValuePassword: false,
            })
        }
    }

    // useEffect(() => {
    //     axios
    //         .get('http://localhost:8080/api/test-api')
    //         .then((data) => console.log(data))
    // })
    return (
        <div className='login-container '>
            <div className='container'>
                <div className='row px-3 px-sm-0'>
                    <div className='content-left col-12 d-none col-sm-7 d-sm-block'>
                        <div className='brand'>Administration</div>
                        <div className='detail'>
                            Administration helps you connect and share with the
                            people in your life.
                        </div>
                    </div>
                    <div className='content-right col-sm-5 col-12 d-flex flex-column gap-3 py-3'>
                        <div className='brand d-sm-none'>Hoi Dan IT</div>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Email address or phone number'
                            value={valueLogin}
                            onChange={(event) =>
                                setValueLogin(event.target.value)
                            }
                        />
                        <input
                            type='password'
                            className='form-control'
                            placeholder='Password'
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                        />
                        <button className='btn btn-primary'>Login</button>
                        <span className='text-center'>
                            <a className='forgot-password' href='#'>
                                Forgot your password?
                            </a>
                        </span>
                        <hr />
                        <div className='text-center'>
                            <button
                                className='btn btn-success'
                                onClick={() => handleCreateNewAccount()}
                            >
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
