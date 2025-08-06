import { useEffect, useState } from 'react';
import { consultar } from '../../../services/Service';
import CardCategoria from "../cardcategoria/CardCategoria";

interface Categoria {
  id: number;
  nome: string;
  descricao: string;
  produto: string[];
}

function ListaCategorias(props:{limite?: number}) {

    const [categorias, setCategorias] = useState<Categoria[]>([]);

async function consultarCategorias() {

    try {
    await consultar('/categorias', setCategorias);
    } catch (error: any) {
        console.error('Erro ao consultar categorias:', error);
    }
    
}

useEffect(() => {
    consultarCategorias();
},[]);

    
    return (
        <>
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-3 gap-8">
                        {categorias.map((categoria, index) => {
                            if (props.limite && index <= props.limite) {
                                return <CardCategoria key={categoria.id} categoria={categoria} />;
                            } 
                            if (!props.limite) {
                                return <CardCategoria key={categoria.id} categoria={categoria} />
                            }
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
export default ListaCategorias;