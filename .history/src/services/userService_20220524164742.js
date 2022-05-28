import axios from 'axios'

const handleRegister = () => {
    const check = isValidInputs()
    if (check === true) {
        axios.post('http://localhost:8080/api/v1/register', {
            email,
            phone,
            username,
            password,
        })
        toast.success('Welcome')
    }
}
