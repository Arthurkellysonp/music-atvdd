'use client'

import { createContext, useState, ReactNode } from "react";
import { Music } from "../dados/music"; // Certifique-se de que o caminho está correto

interface HomeContextType {
  playing: boolean;
  currentMusic: number | null;
  configPlayPause: () => void;
  selectMusic: (index: number) => void;
}

export const HomeContext = createContext<HomeContextType | undefined>(undefined);

export default function HomeContextProvider({ children }: { children: ReactNode }) {
  const [playing, setPlaying] = useState(false);
  const [currentMusic, setCurrentMusic] = useState<number | null>(null);

  const configPlayPause = () => {
    setPlaying(!playing);
  };

  const selectMusic = (index: number) => {
    setCurrentMusic(index);
    setPlaying(true); // Inicia a reprodução ao selecionar
  };

  return (
    <HomeContext.Provider value={{ playing, currentMusic, configPlayPause, selectMusic }}>
      {children}
    </HomeContext.Provider>
  );
}
