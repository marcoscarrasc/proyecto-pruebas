'use client'
import { useState } from 'react';

export default function Multiplicacion() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState(0);

  const handleMultiplicar = () => {
    const RESULTADO = num1 * num2;
    setResultado(RESULTADO);
  };

  return (
    <div>
      <h1>Multiplicación</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
        placeholder="Número 1"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
        placeholder="Número 2"
      />
      <button onClick={handleMultiplicar}>Multiplicar</button>
      <h2>Resultado: {resultado}</h2>
    </div>
  );
}