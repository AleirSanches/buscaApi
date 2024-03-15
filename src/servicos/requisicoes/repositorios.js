
import api from "../api";

export async function  pegarRepositorio (id){

    try {
        const resultado= await api.get(`/repos?postId=${id}`);
        return resultado.data
    }
    catch (error){
        console.log(error)
        return []
    }

}