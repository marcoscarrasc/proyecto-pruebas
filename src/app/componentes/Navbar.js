import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-4">
      <div className="container mx-auto flex justify-around">
        <Link href="/Gifs">
          <h1 className="text-white hover:text-gray-800">Gifs</h1>
        </Link>
        <Link href="/personajes">
          <h1 className="text-white hover:text-gray-800">Dragon Ball Z</h1>
        </Link>
        <Link href="/Enlaces">
          <h1 className="text-white hover:text-gray-800">Home</h1>
        </Link>
        <Link href="/productos">
          <h1 className="text-white hover:text-gray-800">Productos</h1>
        </Link>
      </div>
    </nav>
  );
}