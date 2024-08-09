'use client'
import ProductTable from "../componentes/ProductTable";
import productos from "./MOCK_DATA.json"
import { useState, useEffect } from "react"
import ModalBoleta from "../componentes/ModalBoleta";
import Buscador from "../componentes/buscador";



export default function ProductosPage() {
    const [products, setProducts] = useState([])
    const [isOpen, setIsOpen] = useState(false);
    const [resultados, setResultados] = useState([])


    const handleSearch = (query) => {
        const Data =[
            {
                "id": 1,
                "producto": "polo",
                "color": "Aquamarine",
                "precio": 4,
                "imagen":"" 
            },
            {
                "id": 2,
                "producto": "Miscellaneous",
                "color": "Maroon",
                "precio": 7,
                "imagen": ""
            },
            {
                "id": 3,
                "producto": "Public Utilities",
                "color": "Purple",
                "precio": 9,
                "imagen": ""
            },
            {
                "id": 4,
                "producto": "Technology",
                "color": "Puce",
                "precio": 10,
                "imagen": ""
            }
        ]
         
        

        const filteredResultados = Data.filter(item =>
            item.toLowerCase().includes(query.toLowerCase())
        )

        setResultados(filteredResultados);


    }



    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };


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

    const getTotalPrice = () => {
        return products.reduce((prevValue, currentValue) => prevValue + ((currentValue?.cantidad || 0) * currentValue?.precio), 0)
    }

    return (

        <div className=" w-full h-full bg-gray-200  ">

            <div>
                <h1 className="font-serif text-center text-3xl te">PRODUCTOS</h1>

                <div>
                    
                    <Buscador onSearch={handleSearch} />
                    <ul>
                        {resultados.map((resultados, index) => (
                            <li key={index}>{resultados}</li>
                        ))}
                    </ul>
                </div>

                <ProductTable productos={products} update={updateProduct} />


            </div>



            <div className=" flex items-center h-48 flex-col">
                <span>SubTotal:</span>
                <span>{getTotalPrice()}</span>
                <span>IGV 18%</span>
                <span>{getTotalPrice() * 0.18}</span>

                <span>Total + IGV</span>
                <span>{getTotalPrice() * 0.18 + getTotalPrice()}</span>
            </div>
            <div className=" text-center ">
                <button onClick={openModal} className="w-48 bg-red-500 rounded-lg shadow-lg shadow-slate-950">Generar Boleta</button>

            </div>


            <div >
                <ModalBoleta isOpen={isOpen} onClose={closeModal} >
                    <h1 className="flex justify-center">Boleta</h1>
                    <span className="text-teal-400 flex justify-center">Tienda Pepito</span>

                    <div className="flex flex-col">
                        <span>descuento:{ }</span>
                        <span>Subtotal:{getTotalPrice()}</span>
                        <span>IGV 18%:{getTotalPrice() * 0.18}</span>
                        <span>Tolal :{getTotalPrice() * 0.18 + getTotalPrice()}</span>

                    </div>

                    <button className="bg-blue-400 rounded-lg">
                        imprimir
                    </button>

                </ModalBoleta>
            </div>



        </div>








    )
}