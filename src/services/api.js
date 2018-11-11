import axios from 'axios'

//10.0.0.2 => Emulador Android Studio
//10.0.3.2 => Emulador Genimotion
//localhost => Simulador IOS

const api = axios.create({
    baseURL: 'http://localhost:3000'
})

export default api