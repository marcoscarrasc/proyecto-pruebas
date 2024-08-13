'use client'
import { useState, useEffect } from "react"

export default function ProductTable({ productos, update }) {
    const titles = ["", "Nombre", "Imagen", "Categoría", "Precio", "Cantidad", "Total"]

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-800 text-gray-200 border border-gray-700 rounded-lg shadow-lg">
                <thead>
                    <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                        {titles.map((title, index) => (
                            <th key={index} className="py-3 px-4 text-left font-semibold text-sm">{title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-gray-900">
                    {productos?.map((producto) => (
                        <ProductRow key={producto.id} producto={producto} update={update} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

const ProductRow = ({ producto, update }) => {
    const [product, setProduct] = useState(producto)

    useEffect(() => {
        if (product.seleccionado && (product.cantidad === undefined || product.cantidad === 0)) {
            setProduct({ ...product, cantidad: 1 });
        }
    }, [product.seleccionado]);

    const onUpdateQuantity = (event) => {
        const value = Math.max(0, event.target.value);
        const newProduct = { ...product, cantidad: value }
        setProduct(newProduct)
        update(newProduct)
    }

    const onUpdateStatus = (event) => {
        const value = event.target.checked;
        const newProduct = { ...product, seleccionado: value };

        if (value && (product.cantidad === undefined || product.cantidad === 0)) {
            newProduct.cantidad = 1;
        }

        setProduct(newProduct)
        update(newProduct)
    }

    return (
        <tr className="hover:bg-gray-700 transition-colors">
            <td className="py-2 px-4">
                <input
                    id={`checkbox-${product.id}`}
                    type="checkbox"
                    checked={product.seleccionado || false}
                    onChange={onUpdateStatus}
                    className="form-checkbox h-6 w-6 text-blue-400 border-blue-500 bg-gray-800"
                />
            </td>
            <td className="py-2 px-4">{product.title}</td>
            <td className="py-2 px-4">
                <img src={product.image} alt="Product" className="max-w-[50px] h-[60px] object-cover rounded-lg shadow-md border border-gray-700" />
            </td>
            <td className="py-2 px-4">{product.category}</td>
            <td className="py-2 px-4">S/{product.price}</td>
            <td className="py-2 px-4">
                <input
                    min={0}
                    type="number"
                    value={product.cantidad || 0}
                    onChange={onUpdateQuantity}
                    className="w-24 px-2 py-1 border border-gray-700 bg-gray-800 rounded-md text-gray-300"
                />
            </td>
            <td className="py-2 px-4">{(product.price * (product.cantidad || 0)).toFixed(2)}</td>
        </tr>
    )
}
