import { useHistory } from 'react-router-dom'
import './Login.scss'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { loginUser } from '../../services/userService'

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

    const handleLogin = async () => {
        setObjValidInput(defaultObjValidInput)

        if (!valueLogin) {
            setObjValidInput({
                ...defaultObjValidInput,
                isValidValueLogin: false,
            })
            toast.error('Please enter your email address or phone number')
        }
        if (!password) {
            setObjValidInput({
                ...defaultObjValidInput,
                isValidValuePassword: false,
            })
            toast.error('Please enter your password')
        }

        let response = await loginUser(valueLogin, password)

        if (response && response.data && +response.data.EC === 0) {
            // success
            let data = response.data
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
                            className={
                                objValidInput.isValidValueLogin
                                    ? 'form-control'
                                    : 'is-invalid form-control'
                            }
                            placeholder='Email address or phone number'
                            value={valueLogin}
                            onChange={(event) =>
                                setValueLogin(event.target.value)
                            }
                        />
                        <input
                            type='password'
                            className={
                                objValidInput.isValidPassword
                                    ? 'form-control'
                                    : 'is-invalid form-control'
                            }
                            placeholder='Password'
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                        />
                        <button
                            className='btn btn-primary'
                            onClick={() => handleLogin()}
                        >
                            Login
                        </button>

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
