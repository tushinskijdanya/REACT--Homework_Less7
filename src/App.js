import Layout from "./layouts/layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contacts from "./pages/Contacts";
import NoneFound from "./pages/NoneFound";
import SecretShop from "./pages/SecretShop";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NoneFound />} />
      </Route>
      <Route path="/secret" element={<SecretShop />}/>
    </Routes>
    </>
  );
}

export default App;
