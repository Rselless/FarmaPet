import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4 bg-green-900 text-white'>
                <div className="container flex justify-between text-lg">
                    <Link to='/home' className="text-2xl font-bold">FarmaPet</Link>
                    <div className="flex gap-4">
                        <Link to='/listacategorias' className="hover:text-gray-300">Lista Categorias</Link>
                        <Link to='/cadastrarcategorias' className="hover:text-gray-300">Cadastrar Categorias</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar