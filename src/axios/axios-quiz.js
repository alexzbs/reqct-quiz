import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-ea0e5.firebaseio.com/'
})