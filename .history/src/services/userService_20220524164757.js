import axios from 'axios'

            password,
            const registerNewUser = () => {
    const check = isValidInputs()
    if (check === true) {
        axios.post('http://localhost:8080/api/v1/register', {
            email,
            phone,
            username,
        })
        toast.success('Welcome')
    }
}
