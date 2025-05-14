import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./components/index-page1/index/index.jsx";
import Index3 from "./components/technicians-page3/index3/index3.jsx";
import Index2 from "./components/zones-page2/index2/index2.jsx"; 

//Componente principal de la aplicación
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} /> {/*PAGINA PRINCIPAL(CASOS)*/}
        <Route path="/Tecnicos" element={<Index3 />}/> {/*PAGINA TECNICOS*/}
        <Route path="/Zonas_regionales" element={<Index2 />}/> {/*PAGINA ZONAS*/}
      </Routes>
    </BrowserRouter>
  );
}
