'use client'
import ProductTable from "../componentes/ProductTable";
import { useState, useEffect } from "react";
import ModalBoleta from "../componentes/ModalBoleta";
import Buscador from "../componentes/buscador";

export default function ProductosPage({ newProduct }) {
    const [products, setProducts] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");

    console.log({ newProduct });

    const handleSearch = (query) => {
        setSearch(query);
    };

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        // Consumir una api para traer productos
        const fetchData = async () => {
            const response = await fetch('https://fakestoreapi.com/products/');
            const data = await response.json();
            console.log({ response, data });
            setProducts(data);
        };
        fetchData();
    }, []);

    const updateProduct = (product) => {
        const productsUpdated = products.map((productIterator) => {
            if (product.id === productIterator.id) {
                return product;
            }
            return productIterator;
        });
        setProducts(productsUpdated);
    };

    const getTotalPrice = () => {
        return (products.filter(e => e.seleccionado).reduce((prevValue, currentValue) => prevValue + ((currentValue?.cantidad || 0) * currentValue?.price), 0));
    };

    const getProductsFiltered = (products) => {
        return products.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));
    };

    const selectedProducts = products.filter(p => p.seleccionado);

    return (
        <div className="w-full h-full bg-gray-200 p-20">
            <div>
                <h1 className="font-serif text-center text-3xl">PRODUCTOS</h1>
                <Buscador onSearch={handleSearch} />
                <ProductTable productos={getProductsFiltered(products)} update={updateProduct} />
            </div>

            <div className="flex flex-col items-center h-48 p-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-100 rounded-lg shadow-lg">
                <div className="flex flex-col space-y-2">
                    <div  className="flex justify-between w-full text-sm font-medium">
                        <span>SubTotal:</span>
                        <span>{getTotalPrice().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between w-full text-sm font-medium">
                        <span>IGV 18%</span>
                        <span>{(getTotalPrice() * 0.18).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between w-full text-lg font-bold text-green-400">
                        <span>Total</span>
                        <span>{(getTotalPrice() * 0.18 + getTotalPrice()).toFixed(2)}</span>
                    </div>
                    <button onClick={openModal} className="w-48 bg-red-500 rounded-lg shadow-lg shadow-slate-950">Generar Boleta</button>

                </div>
            </div>

            <div className="text-center">

                <ModalBoleta isOpen={isOpen} onClose={closeModal} selectedProducts={selectedProducts}>
                    {/* Puedes pasar el contenido aquí si es necesario */}
                </ModalBoleta>
            </div>
        </div>
    );
}
