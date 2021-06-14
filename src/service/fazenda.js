import {http} from './config'

export default {
    
    cadastrarUser:(cafeicultor) => {
        return http.post('cafeicultor', cafeicultor)
    },

    loginUser:(email) => {
        return http.get('cafeicultor/email/' + email)
    },

    cadastrarFazenda:(dados) => {
        return http.post('sitioFazenda', dados)
    },

    listarFazenda:() => {
        return http.get('sitioFazenda')
    },

    addCafe:(cafe) => {
        return http.post('cafe', cafe)
    }

}