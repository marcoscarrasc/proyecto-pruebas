import Image from "next/image";
import Link from "next/link";



export default function Home() {
  return (
    <main >
      <div className=" bg-cyan-300">
        <Link href={"/Gifs"} >ir a Gifs</Link>


      </div>
      <div>
        <Link href={"/personajes"} >Dragon Ball Z</Link>
      </div>
      <div>
        <Link href={"/Enlaces"}>Home</Link>
      </div>
     <div>
      <Link href={"/productos"}>Productos</Link>
     </div>
      
    </main>
  );
}
