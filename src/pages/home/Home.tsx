import ListaCategorias from "../../components/categoria/listacategorias/ListaCategorias"


function Home() {
    return (
        <>
            <div className="bg-green-900 w-full flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            FarmaPet
                        </h2>
                        <p className='flex flex-col items-center justify-center text-2xl'>
                            A farmacia que cuida do seu pet!
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src="public/images/farmacia-image-w-bg.png"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
            < ListaCategorias limite={5}/>
        </>
    )

}

export default Home