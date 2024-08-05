'use client'

import GifItem from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs"


export default function ({ category }) {

   const { images, isLoading }=useFetchGifs(category)
console.log({isLoading})



    return (
        <>
            <h3>{category}</h3>



            <div className="">
                {images.map((image) => (
                    <GifItem
                        key={image.id}
                        {...image} />

                ))}

            </div>




        </>
    )
}