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

    listarFazendaCafeicultor:(idUser) => {
        return http.get('sitioFazenda/cafeicultor/'+idUser)
    },

    listarFazenda:(idUser) => {
        return http.get('sitioFazenda/'+idUser)
    },

    listarFazendas:() => {
        return http.get('sitioFazenda/')
    },

    atualizaFazenda:(idFazenda, dados) => {
        return http.put('sitioFazenda/' + idFazenda, dados)
    },

    addCafe:(cafe) => {
        return http.post('cafe', cafe)
    },

    listarCafe:() => {
        return http.get('cafe')
    },

    atualizaCafe:(idCafe, dados) => {
        return http.put('cafe/' + idCafe, dados)
    },

    deleteCafe:(idCafe) => {
        return http.delete('cafe/' + idCafe)
    },

}