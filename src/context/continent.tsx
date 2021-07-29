import React, { createContext, ReactNode, useState, useContext } from "react";

interface City {
  name: string;
  country: string;
}

export interface Continent {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  resume: string;
  countries: number;
  languages: number;
  citys: City[];
}

interface ContinentContextData {
  continent: Continent;
  getContinent: (value: Continent) => void;
}

interface ContinentProviderProps {
  children: ReactNode;
}

const ContinentContext = createContext({} as ContinentContextData);

export function ContinentProvider({ children }: ContinentProviderProps) {
  const [continent, setContinent] = useState<Continent>();

  function getContinent(value: Continent) {
    console.log("ok");
    setContinent(value);
  }
  console.log(continent);

  return (
    <ContinentContext.Provider value={{ continent, getContinent }}>
      {children}
    </ContinentContext.Provider>
  );
}

export function useContinent() {
  return useContext(ContinentContext);
}
