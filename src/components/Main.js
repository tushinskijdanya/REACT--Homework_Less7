import SecretGoods from "./SecretGoods";
import { useContext } from "react";
import { ThemeContext } from "../pages/SecretShop";

function Main () {
    const {cards, setCards} = useContext(ThemeContext);

  return (
    <main className="secret-main">
        <div className="secret-container">
            <section className="novelties_cards">
                {cards.map((card, idx) => <SecretGoods card={card} key={idx} idx={idx} setCards={setCards} />)};
            </section>
        </div>
    </main>
  );

}

export default Main;
