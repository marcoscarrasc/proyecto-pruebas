'use client'

import { useState } from "react"
import AddCategory from "../componentes/AddCategory"
import GifGrid from "../componentes/GifGrid"



export default function GifExpertApp() {

    const [categories, setCategories] = useState([""])

    const onAddcategory = (newCategory) => {
        if (categories.includes(newCategory)) return
        setCategories([newCategory, ...categories])

    }

    return (
        <main  className="">
            <h1 className="">GifExpert</h1>
           
           
            <AddCategory 
             onNewCategory={onAddcategory}  />

        
                {
                    categories.map((category) => 
                        (
                            <GifGrid key={category} category={category} />

                        )



                    )}

         
            <button onClick={onAddcategory}>Agregar</button>



        </main>

    )
}