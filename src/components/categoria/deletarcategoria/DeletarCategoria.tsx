import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { consultar } from "../../../services/Service";

interface Categoria {
  id: number;
  nome: string;
  descricao: string;
  produto: string[];
}

function DeletarCategoria() {

    const [categoria, setCategorias] = useState<Categoria>();

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

    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar Categoria</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar o Categoria a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header 
                    className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>
                    {categoria?.nome}
                </header>
                <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria?.descricao}</p>
                <div className="flex">
                    <button 
                        className='w-full text-slate-100 bg-blue-400 hover:bg-blue-900 flex items-center justify-center py-2'>
                        Não
                    </button>
                    <button 
                        className='text-slate-100 bg-red-400 hover:bg-red-900 w-full flex items-center justify-center'>
                        Sim
                    </button>
                </div>
            </div>
        </div>
    )
}
export default DeletarCategoria