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

    atualizaFazenda:(idFazenda, dados) => {
        return http.put('sitioFazenda/' + idFazenda, dados)
    },

    addCafe:(cafe) => {
        return http.post('cafe', cafe)
    }

}