
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

export async function  atualizarRepositorio (postId, nome, data , id){

    try {
         await api.put(`/repos/${id}`,{
            name:nome,
            date:data,
            postId: postId,
           
        });
        return "Sucesso"
    }
    catch (error){
        console.log(error)
        return "Erro"
    }

}