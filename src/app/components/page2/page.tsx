import Link from "next/link";

export default function Page2() {
  return (
    <div className="p-8 pt-[150px] min-h-screen bg-black text-white">
      <div className="p-6 pt-[100px] max-w-3xl mx-auto space-y-6">
        <h1 className="text-2xl md:text-4xl font-bold">
          Proyecto - Punto 2: Pruebas Técnicas Fox-Ordery
        </h1>

        <p>
          Este proyecto corresponde al <strong>punto 2</strong> de las pruebas técnicas de la empresa{" "}
          <strong>Fox-Ordery</strong>.
        </p>

        <ul className="list-disc list-inside space-y-2">
          <li>
            Usando <strong>React</strong>, se creó un proyecto que consume la API:{" "}
            <a
              className="text-blue-400 underline"
              href="https://www.omdbapi.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.omdbapi.com/
            </a>
          </li>
          <li>
            El proyecto permite mostrar la información de las <strong>primeras 10 películas</strong>, incluyendo su
            póster.
          </li>
          <li>Incluye un campo de <strong>búsqueda</strong> (opcional).</li>
          <li>
            Contiene un <strong>&lt;aside&gt;</strong> con el conteo de películas por año y por director (opcional).
          </li>
        </ul>

        <div>
          <h2 className="text-xl font-semibold">Tecnologías utilizadas:</h2>
          <ul className="list-disc list-inside">
            <li>Node.js: <code>v22.15.0</code></li>
            <li>NPM: <code>9.8.1</code></li>
            <li>Tailwind CSS</li>
            <li>Routing dinámico: <code>movie/[id]</code></li>
          </ul>
        </div>

        <p>
          La página es <strong>responsiva</strong>, aunque sencilla, priorizando el cumplimiento de los requerimientos funcionales.
        </p>

        <p>
          Presento los resultados en este formato ya que no se especificó cómo debía entregarse. ¡Espero que les guste! 😊
        </p>

        <p>
          Puedes ver los demás puntos de la prueba en mi portafolio:
          <a
            className="text-blue-400 underline ml-1"
            href="https://jorgeisaac.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            jorgeisaac.vercel.app
          </a>
        </p>

        {/* Links de navegación estilizados */}
        <div className="pt-6 flex flex-wrap gap-4">
          <Link
            href="/"
            className="text-white px-4 py-2 rounded hover:bg-gray-500 transition"
          >
            Inicio
          </Link>
          <Link
            href="/components/page1"
            className="text-white px-4 py-2 rounded hover:bg-gray-500 transition"
          >
            Página 1
          </Link>
        </div>
      </div>
    </div>
  );
}
