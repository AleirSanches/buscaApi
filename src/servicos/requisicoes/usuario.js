import api from "../api";


export  async function buscaUsuario(){
    try {
        const resultado= await api.get('/users?login=natalia');
        return resultado.data[0]
    }
    catch (error){
        console.log(error)
        return {}
    }
}