import { type ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { atualizar, cadastrar, consultar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";

function FormCategoria() {

    const navigate = useNavigate();

    const [categoria, setCategorias] = useState<Categoria>({
        id: 0,
        nome: '',
        descricao: '',
    })
    const [isLoading, setIsLoading] = useState(false)


    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await consultar(`/categorias/${id}`, setCategorias);
        } catch (error: any) {
            console.error('Erro ao buscar categoria:', error);
            }
        }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategorias({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate("/listacategorias");
    }
    

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)
    
    try {
      if (id) {
        await atualizar(`/categorias/`, categoria, setCategorias);
        console.log("Categoria atualizada com sucesso.");
      } else {
        await cadastrar(`/categorias`, categoria, setCategorias);
        console.log("Categoria cadastrada com sucesso.");
      }
    } catch (error) {
      console.error("Erro ao salvar categoria:", error);
    }

        setIsLoading(false)
        retornar()
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto p-4">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        placeholder="Digite o nome da nova categoria"
                        name='nome'
                        value={categoria.nome}
                        onChange={atualizarEstado}
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição:</label>
                    <input
                        type="text"
                        placeholder="Digite a descrição da nova categoria (opcional)"
                        name='descricao'
                        value={categoria.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <button
                    className="rounded text-slate-100 bg-green-900 hover:bg-green-700 w-1/2 py-2 mx-auto flex justify-center"
                              type="submit">
          {isLoading ?
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            /> :
            <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>

          }
        </button>
      </form>
    </div>
  );

}
export default FormCategoria;
