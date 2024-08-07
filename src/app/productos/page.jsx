'use client'
import data from "./MOCK_DATA.json"
import { useState } from "react"

const titles = ["", "producto", "color", "precio", "cantidad", "total"]
const productos = [

    {

        id: 1,
        producto: "polo",
        color: "azul",
        precio: "S/3.36"
    },
    {
        id: 2,
        producto: "camisa",
        color: "Marron",
        precio: "S/1.96"
    },
    {
        id: 3,
        producto: "pantalon",
        color: "Purple",
        precio: "S/2.86"
    },
    {
        id: 4,
        producto: "casaca",
        color: "blanca",
        precio: "S/0.70"
    }
]




export default function Tablero({ producto, }) {
    const [num1, setNum1] = useState();
    const [num2, setNum2] = useState();
    const [resultado, setResultado] = useState();

    const handleMultiplicar = () => {
        const RESULTADO = num1 * num2;
        setResultado(RESULTADO);
    };
console.log({handleMultiplicar})



    return (

        <div>

            <h1>PRODUCTOS</h1>
            <table>
                <thead>
                    <tr>
                        {titles.map(title => (<th>{title}</th>))}
                    </tr>



                </thead>
                <tbody>
                    {productos?.map((producto, index) => (
                        <>

                            <tr key={index}>
                                <div class="flex items-center mb-4">
                                    <input id="default-checkbox" type="checkbox" value="" className=" w-8 text-blue-600"></input>
                                    <label for="default-checkbox" ></label>
                                </div>
                                <td><span>{producto.producto}</span></td>
                                <td><span>{producto.color}</span></td>
                                <td><span >{producto.precio}</span></td>
                                <input type="text" value={num1} onChange={(e) => setNum1(Number(e.target.value))} />
                                <td><span >{producto.cantidad}</span></td>
                                <input type="number" value={num2} onChange={(e) => setNum2(Number(e.target.value))} />
                                <span>TOTAL </span>
                                <button onClick={handleMultiplicar}>Multiplicar</button>
                            </tr>
                        </>
                    ))}
                </tbody>
            </table>

        </div>








    )
}