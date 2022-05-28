import axios from 'axios'

const registerNewUser = (email, phone, username, password) => {
    const check = isValidInputs()
    if (check === true) {
        axios.post('http://localhost:8080/api/v1/register', {})
        toast.success('Welcome')
    }
}
