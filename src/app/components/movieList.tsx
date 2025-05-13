'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const API_KEY = "49951d31";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("movie");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    async function fetchMovies() {
      const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}&page=${page}`);
      const data = await res.json();
      setMovies(data.Search || []);
    }
    fetchMovies();
  }, [searchTerm, page]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchTerm(inputValue || "movie"); // fallback a 'movie'
    setPage(1); // reiniciar a página 1 al buscar
  };

  const handleFilter = (genre: string) => {
    setSearchTerm(genre);
    setPage(1); // reiniciar a página 1 al aplicar filtro
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row p-4 justify-center md:justify-between items-center">
        {/* Buscador */}
        <form onSubmit={handleSearch} className="flex items-center gap-4 border-2 border-white rounded-[16px] p-2 justify-center max-w-[300px] ">
          <input
            type="text"
            placeholder="Buscar películas..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="p-2"
          />
          <button type="submit" className="p-2">🔍</button>
        </form>

        {/* Filtros rápidos */}
        <div className="my-4 flex gap-1 justify-center">
          <button onClick={() => handleFilter('movie')} className="p-2 text-white rounded">Todos</button>
          <button onClick={() => handleFilter('comedy')} className="p-2 text-white rounded">Comedia</button>
          <button onClick={() => handleFilter('action')} className="p-2 ext-white rounded">Acción</button>
          <button onClick={() => handleFilter('horror')} className="p-2 text-white rounded">Terror</button>
          <button onClick={() => handleFilter('fantasy')} className="p-2 text-white rounded">Fantasía</button>
        </div>
      </div>

      {/* Lista de películas */}
      <ul className="w-full p-4 max-w-[1800px] mx-auto flex flex-wrap gap-6 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center">
        {movies.map((movie: any, index: number) => (
          <li key={index} className="flex flex-col items-center gap-1">
            <h3 className="text-center font-semibold">
              <Link href={`/movie/${movie.imdbID}`}>
                {movie.Title} ({movie.Year})
              </Link>
            </h3>
            {movie.Poster && movie.Poster !== "N/A" ? (
              <Link href={`/movie/${movie.imdbID}`}>
                <img src={movie.Poster} alt={movie.Title} className="w-full h-auto rounded-md" />
              </Link>
            ) : (
              <p>Imagen no disponible</p>
            )}
          </li>
        ))}
      </ul>

      {/* Paginación */}
      <div className='w-full p-4 flex justify-center items-center gap-4  bg-gray-600'>
        <button onClick={() => setPage((p) => Math.max(p - 1, 1))} disabled={page === 1}>
          Ir anterior
        </button>
        <span>(Página {page})</span>
        <button onClick={() => setPage((p) => p + 1)}>Ir siguiente</button>
      </div>
    </div>
  );
}
