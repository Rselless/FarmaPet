import axios from "axios";

const api = axios.create({
    baseURL: 'https://farmacianest.onrender.com'
})

export const consultar = async (url: string, setDados: Function) => {
    const resposta = await api.get(url)
    setDados(resposta.data)
}

export const deletar = async (url: string, header: Object) => {
    await api.delete(url, header)
}