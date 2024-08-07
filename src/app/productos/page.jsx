'use client'
import ProductTable from "../componentes/ProductTable";
import productos from "./MOCK_DATA.json"
import { useState, useEffect } from "react"



export default function ProductosPage() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        // Consumir una api para traer productos
        const promise = new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve(productos)
            }, 500)
        });

        promise.then((response) => {
            setProducts(response)
        })

    }, [])

    const updateProduct = (product) => {
        const productsUpdated = products.map((productIterator) => {

            if (product.id === productIterator.id) {
                return product
            }

            return productIterator
        })

        setProducts(productsUpdated)
    }

    const getTotalPrice=()=>{
        return products.reduce((prevValue, currentValue) => prevValue + ((currentValue?.cantidad || 0) * currentValue?.precio), 0)
    }

    return (

        <div className="w-full">
            <div>
                <h1>PRODUCTOS</h1>
                <ProductTable productos={products} update={updateProduct} />
            </div>


            <div className="bg-red-200 w-96 flex justify-end h-96">
                <span>Total:</span>
                <span>{getTotalPrice()}</span>
             
            </div>

        </div>








    )
}