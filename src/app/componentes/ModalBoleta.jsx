
export default function ModalBoleta({ isOpen, onClose, selectedProducts }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-100 bg-opacity-60 flex items-center justify-center">
      <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-2xl shadow-2xl transform transition-transform duration-300 scale-100 hover:scale-105">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-white font-semibold text-xl hover:text-gray-300 transition-colors duration-200">
            X
          </button>
        </div>
        <h1 className="text-2xl font-extrabold text-teal-300">Boleta</h1>
        <span className="text-teal-500 block mt-1 text-lg">Tienda Pepito</span>
        <div className="flex flex-col mt-6 space-y-3">
          {selectedProducts?.map(product => (
            <div key={product.id} className="border-b border-teal-700 py-2">
              <span className="text-gray-200">{product.title}</span>
              <span className="text-gray-400"> - Cantidad: {product.cantidad || 0}</span>
            </div>
          ))}
          <div className="text-gray-300 mt-4 space-y-1 flex flex-col">
            <span>Subtotal: {(selectedProducts?.reduce((acc, p) => acc + (p.price * (p.cantidad || 0)), 0)).toFixed(2)}</span>
            <span>IGV 18%: {((selectedProducts?.reduce((acc, p) => acc + (p.price * (p.cantidad || 0)), 0) * 0.18)).toFixed(2)}</span>
            <span>Total: {((selectedProducts?.reduce((acc, p) => acc + (p.price * (p.cantidad || 0)), 0) * 0.18) + selectedProducts.reduce((acc, p) => acc + (p.price * (p.cantidad || 0)), 0)).toFixed(2)}</span>
          </div>
        </div>
        <button className="bg-teal-500 text-white rounded-lg p-3 mt-6 hover:bg-teal-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-300">
          Imprimir
        </button>
      </div>
    </div>
  );
}
