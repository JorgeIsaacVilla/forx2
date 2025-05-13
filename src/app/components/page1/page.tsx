import Link from "next/link";

export default function Page1() {
  return (
    <div className="p-8 pt-[150px] min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-2xl md:text-4xl font-bold">Saludos a Fox</h1>
      <br />
      <h2 className="text-xl font-semibold">
        Cordial saludo. Mi nombre es Jorge Isaac Villa López y soy desarrollador Frontend.
      </h2>
      <br />
      <p>
        Me encanta trabajar con elementos en 3D, desarrollar videojuegos y hacer posible lo imposible.
      </p>
      <p>
        Me apasionan los retos, ya que para mí los obstáculos son una oportunidad perfecta para superarme.
      </p>
      <p>
        Valoro muchísimo esta oportunidad que me brindan para demostrar mis capacidades y crecer como profesional. 😁👍🏽
      </p>
      <br />
      <div className="flex gap-4">
        <a className="text-white px-4 py-2 rounded hover:bg-gray-500 transition" href="https://www.linkedin.com/in/jorge-villa-l%C3%B3pez-742647b5/">LinkedIn</a>
        <a className="text-white px-4 py-2 rounded hover:bg-gray-500 transition" href="https://jorgeisaac.vercel.app/">Web</a>
        <a className="text-white px-4 py-2 rounded hover:bg-gray-500 transition" href="https://github.com/JorgeIsaacVilla">GitHub</a>
      </div>
      <br />
      <div className="flex gap-4 flex-col">
        <Link className="text-white px-4 py-2 rounded hover:bg-gray-500 transition" href="/">Inicio</Link>
      </div>
      <div>
        <Link className="text-white px-4 py-2 rounded hover:bg-gray-500 transition" href="/components/page2">Ir a la presentación del proyecto</Link>
      </div>
    </div>
  );
}
