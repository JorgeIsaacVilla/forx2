import type { Metadata } from "next";

const API_KEY = "49951d31";

// ✅ Tipo unificado
type MoviePageProps = {
  params: {
    id: string;
  };
};

// ✅ Componente principal
export default async function MoviePage({ params }: MoviePageProps) {
  const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${params.id}`);
  const data = await res.json();

  if (data.Response === "False") {
    return <h1>Película no encontrada</h1>;
  }
  
  return (
    <div className="p-8">
      <div className="flex flex-col md:flex-row gap-4 pt-[150px] items-center md:items-start">
        {data.Poster && data.Poster !== "N/A" && (
          <img
            src={data.Poster}
            alt={data.Title}
            style={{ width: '300px', borderRadius: '10px' }}
          />
        )}
        <aside className="flex flex-col gap-4 text-center md:text-left max-w-xl">
          <h1 className="text-2xl font-bold">{data.Title} ({data.Year})</h1>
          <p><strong>Director:</strong> {data.Director}</p>
          <p><strong>Género:</strong> {data.Genre}</p>
          <p><strong>Sinopsis:</strong> {data.Plot}</p>
        </aside>
      </div>

      <h2 style={{ marginTop: '2rem' }}>🎬 Reproduciendo...</h2>
      <div className="w-full h-[500px] bg-black text-white flex items-center justify-center rounded-[10px] text-center">
        <p>[Simulación de video de {data.Title}]</p>
      </div>
    </div>
  );
}

// Si necesitas agregar un título para la página:
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${params.id}`);
  const data = await res.json();
  
  return {
    title: data.Title || 'Película',
  };
}
