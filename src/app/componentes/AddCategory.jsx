'use client'

import { Main } from "next/document"
import { useState } from "react"

export default function ({onNewCategory}) {

    const [inputValue, setInputValue] = useState("")


    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        if(inputValue.trim().length <= 1)return

       
        setInputValue("")
        onNewCategory( inputValue.trim() )

    }
    return (
       <main >
        <form onSubmit={ onSubmit } >
            <input onChange={onInputChange} value={inputValue} className="p-3" placeholder="buscar gifs" />
        </form>
       </main>
    )
}