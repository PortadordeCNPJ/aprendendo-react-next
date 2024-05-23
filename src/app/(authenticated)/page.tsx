import Image from "next/image";
import Titulo from "./Titulo";
import Galery from "./Galery";
import ProximoeAnterior from "./proximoEanterior";

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Titulo titulo="teste" />
      </div>
      <div className="flex justify-around">
        <Galery />
      </div>
    </main>
  );
}
