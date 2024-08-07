
import { useState, useEffect } from "react"

export default function ProductTable({ productos, update }) {
    const titles = ["", "producto", "color", "precio", "cantidad", "total"]


    return (
        <table>
            <thead>
                <tr>
                    {titles.map(title => (<th>{title}</th>))}
                </tr>



            </thead>
            <tbody>
                {productos?.map((producto, index) => (
                    <ProductRow producto={producto} update={update} />
                ))}
            </tbody>
        </table>
    )
}

const ProductRow = ({ producto, update }) => {

    const [product, setProduct] = useState(producto)

    useEffect(() => {
        setProduct({ ...producto, cantidad: 0 })
    }, [])

    const onUpdateQuantity = (event) => {
        const value = event.target.value
        const newProduct = { ...product, cantidad: parseInt(value) }
        setProduct(newProduct)
        update(newProduct)
    }

    return (
        <tr key={product.id}>
            <td>
                <div className="flex items-center mb-4">
                    <input id="default-checkbox" type="checkbox" value="" className=" w-8 text-blue-600"></input>
                    <label for="default-checkbox" ></label>
                </div>
            </td>
            <td><span>{product.producto}</span></td>
            <td><span>{product.color}</span></td>
            <td><span >S/{product.precio}</span></td>
            <td>
                <input min={0} type="number" value={product.cantidad} onChange={onUpdateQuantity} />
            </td>
            <td>
                <span>{product.precio * product.cantidad} </span>
            </td>

        </tr>
    )
}