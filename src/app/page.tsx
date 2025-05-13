"use client";

import { useEffect, useState } from "react";
import MovieList from "./components/movieList";

const images = [
  "https://static1.srcdn.com/wordpress/wp-content/uploads/wm/2023/06/miles-morales-spider-man-across-the-spiderverse.jpg",
  "https://wallpapers.com/images/featured/iron-man-ouqxo5w2b59h0042.jpg",
  "https://media.vandal.net/i/1200x1200/2-2023/20232410314032_1.jpg",
  "https://hips.hearstapps.com/hmg-prod/images/el-increible-hulk-1554403044.jpg",
  "https://c.files.bbci.co.uk/13623/production/_121759397_encanto-online-use-490.0_074.60_0104-1201x649-5e7dd5b.jpg",
];

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 7000); // 7 segundos

    return () => clearInterval(timer);
  }, []);

  return (
    <section>
      {/* Carrusel */}
      <div className="w-full h-[60vh] relative overflow-hidden">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Imagen ${i + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover object-top transition-opacity duration-1000 ${
              i === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Texto centrado */}
        <div className="absolute inset-0 flex items-center justify-center flex-col bg-black/50">
          <img src="https://foxordering.com/assets/img/logo-mobile-footer.png" alt="logo-pres"  className="w-[180px] "/>
          <h1 className="text-white text-2xl md:text-4xl font-bold px-4 py-2 rounded-lg text-center">
            Disfruta de las series y películas más exitosas en taquilla
          </h1>
        </div>
      </div>

      <br />

      {/* Lista de películas */}
      <MovieList />
    </section>
  );
}
