import Main from "../components/Main";
import Header from "../components/Header";
import novelties from "../data/novelties-data";
import { createContext, useState } from "react";

function SecretShop() {
  const [cards, setCards] = useState(novelties);

  return (
    <>
      <ThemeContext.Provider value={{cards, setCards}}>
        <Header />
        <Main />
      </ThemeContext.Provider>
    </>
  );
}

export const ThemeContext = createContext('default');
export default SecretShop;
