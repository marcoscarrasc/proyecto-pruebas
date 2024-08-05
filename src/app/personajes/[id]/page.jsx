'use client'
import { useParams } from 'next/navigation'
import { personajes } from "../page"
import { useFetch } from '@/app/hooks/useFetch';
import Image from 'next/image';

export default function (props) {

    const { id } = useParams();
    const { data, isLoading, hasError } = useFetch(`https://dragonball-api.com/api/characters/${id}`)

    return (
        <main>


            <div className='grid grid-cols-3 gap-8 py-4 px-4'>
                {data?.transformations?.map(transformation => (

                    <div className='relative min-h-[350px] min-w-[350px] w-full'>
                        <div>
                            <span>{transformation.name}</span>

                        </div>
                        <div>
                            <span>{transformation.ki}</span>

                        </div>
                        <div className='bg-red-200'>
                            <Image className='' src={transformation.image} width={200} height={200} alt='Imagen de transformacion' />

                        </div>


                    </div>


                ))}
            </div>


        </main>
    )
}