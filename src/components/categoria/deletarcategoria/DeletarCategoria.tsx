import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { consultar, deletar } from "../../../services/Service";
import type Categoria from "../../../models/Categoria";


function DeletarCategoria() {
    
    const navigate = useNavigate()
    const [categoria, setCategorias] = useState<Categoria>();
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const {id} = useParams<{id: string}>();

    async function consultarCategoria(id: string) {
        try {
            await consultar(`/categorias/${id}`, setCategorias)
        } catch (error: any) {
            alert('Erro!')
        }
    }
    
    useEffect(() => {
        if (id !== undefined)
    consultarCategoria(id);
    }, [id]);

    async function deletarCategoria() {
        setIsLoading(true)

        try {
            await deletar(`/categorias/${id}`, {
            })
            alert('Categoria apagada com sucesso')

        } catch (error: any) {
                alert('Erro ao deletar a categoria.')
            }
        

        setIsLoading(false)
        retornar()
    
        }
        function retornar() {
        navigate("/listacategorias");
        }
    
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar Categoria</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar a Categoria a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header 
                    className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>
                    {categoria?.nome}
                </header>
                <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria?.descricao}</p>
                <div className="flex">
                    <button 
                        className='w-full text-slate-100 bg-blue-400 hover:bg-blue-900 flex items-center justify-center py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='text-slate-100 bg-red-400 hover:bg-red-900 w-full flex items-center justify-center'
                        onClick={deletarCategoria}>
                        Sim
                    </button>
                </div>
            </div>
        </div>
    )
}
export default DeletarCategoria