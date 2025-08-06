import { Link } from 'react-router-dom';

interface CardCategoriaProps {
    categoria: {
        id: number;
        nome: string;
        descricao: string;
        produto: string[];
    }
}

function CardCategoria({ categoria }: CardCategoriaProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden shadow-lg bg-white justify-between'>
            <header className='py-2 px-6 bg-green-900 text-white font-bold text-2xl'>
                {categoria.nome}
            </header>
            <p className='p-2 text-2xl bg-slate-200 h-full'>{categoria.descricao}</p>
            <div className='p-1 bg-slate-100 flex flex-col gap-2'>
                {categoria.produto.join(', ')}
            </div>
            <div className="flex">
                <Link to={`/editarcategoria/${categoria.id}`} 
                    className='w-full text-slate-100 bg-blue-400 hover:bg-blue-900 flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarcategoria/${categoria.id}`} className='text-slate-100 bg-red-400 hover:bg-red-900 w-full 
                    flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>

        </div>
    )
}

export default CardCategoria