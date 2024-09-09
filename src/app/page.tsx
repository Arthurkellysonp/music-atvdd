'use client'

import { useContext } from "react";
import { HomeContext } from "./context/HomeContext";
import { musics } from "./dados/music";

export default function Home() {
  const { currentMusic, selectMusic } = useContext(HomeContext);

  return (
    <main className="flex min-h-screen">
      {/* Menu lateral */}
      <aside className="w-1/4 p-4 bg-gray-200">
        <h2 className="text-xl font-bold mb-4">Músicas Disponíveis</h2>
        <ul>
          {musics.map((music, index) => (
            <li
              key={index}
              onClick={() => selectMusic(index)} // Seleciona a música ao clicar
              className={`cursor-pointer mb-2 p-2 rounded-md ${currentMusic === index ? 'bg-yellow-400' : 'bg-white'}`}
            >
              <img src={music.image} alt={music.name} className="w-12 h-12 mb-2" />
              <h3>{music.name}</h3>
              <p>{music.author}</p>
              <p>{music.description}</p>
            </li>
          ))}
        </ul>
      </aside>

      {/* Área principal */}
      <section className="flex-1 p-24">
        <h1>{currentMusic !== null ? `Reproduzindo: ${musics[currentMusic].name}` : "Nenhuma música selecionada"}</h1>
        {/* Reprodutor de Áudio */}
        {currentMusic !== null && (
          <audio controls autoPlay src={musics[currentMusic].urlAudio} />
        )}
      </section>
    </main>
  );
}
