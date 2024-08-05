'use client'

import Image from "next/image"
import { PokemonCard } from "../componentes/PokemonCard"
import { useCounter } from "../hooks/useCounter"
import { useFetch } from "../hooks/useFetch"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"



export default function personajes() {

    const [personajes, setPersonajes] = useState([])
    const [pagina, setPagina] = useState(1)
    const [disabled, setDisabled] = useState(false)
    const { ref, inView, entry } = useInView({ skip: disabled })
    const [paginas, setPaginas] = useState(null)
    const getPersonajes = async (pagina) => {
        const resp = await fetch(`https://dragonball-api.com/api/characters?page=${pagina}&limit=100`)
        return resp.json()
    }


    const cargarPersonajes = async () => {
        const apiPersonajes = await getPersonajes(pagina)
        const items = apiPersonajes?.items
        const meta = apiPersonajes?.meta
        const totalPage = meta.totalPages

        if (paginas == null) {
            setPaginas(totalPage)
        }

        setPersonajes(prev => [...prev, ...items])
        setPagina(prev => prev + 1)
    }


    useEffect(() => {

        console.log("Renderizando")

        if (inView && (pagina <= paginas || paginas == null)) {

            if (pagina == paginas) {
                setDisabled(true)
            }
            cargarPersonajes()

        }



    }, [inView])


    const renderCharacters = (items) => {
        return items?.map(item => <CharacterCard {...item} />)
    }

    return (
        <main >

            <div >

                <div className="grid grid-cols-4 gap-8 px-8 py-8 place-content-center place-items-center bg-gray-400 " >
                    {renderCharacters(personajes)}
                </div>
                {
                    (pagina <= paginas || paginas == null) && <div ref={ref} > Loading... </div>
                }


            </div>



        </main>





    )
}


const CharacterCard = ({ name, id, ki, image, maxKi, race, description }) => {

    return (
        <article className=" flex  flex-col w-full  ">


            <Link href={`/personajes/${id}`}>
                {/* hover:-translate-y-10 hover:-translate-x-4 */}
                <div className=" relative min-h-[350px] min-w-[350px] w-full ">
                    <Image src={image} alt={`Foto de ${name}`} width={200} height={200}
                        className="transition-transform  hover:scale-110 absolute min-h-[400px] max-h-[400px]  -top-4 w-full object-center object-contain"
                    />
                    <img src="https://i.pinimg.com/736x/ac/14/ca/ac14ca7565fb988f2811e0adf04b96ad.jpg" width={310} className="rounded-md border-4 border-yellow-400"></img>


                </div>
            </Link>
            <div className="bg-slate-700 w-full flex items-start px-4 rounded" >
                <div>
                    <div>
                        <span className="font-bold text-orange-500 text-2xl">{name}</span>
                    </div>
                    <span className="text-stone-200 text-2xl">Base ki:</span>
                    <div>
                        <span className="font-bold text-orange-500 text-2xl">{ki}</span>
                    </div>
                    <span className="text-stone-200 text-2xl" >Total ki:</span>
                    <div>
                        <span className="font-bold text-orange-500 text-2xl">{maxKi}</span>
                    </div>
                    <span className="text-stone-200 text-2xl">Race:</span>
                    <div>
                        <span className="italic text-red-400 text-2x1">{race}</span>

                    </div>

                </div>
            </div>
        </article>
    )
}