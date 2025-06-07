
// pagina principal

"use client";
import {EnderecoForm} from "@/components";
export default function Home() {

    return (
      <>
    <h1 style={{ textAlign: "center" }}>Olá, esta é a pagina home</h1>

    <p style={{ textAlign: "center" }}>se quiser ter uma idéia de quanto custará o frete<br/>
        use esta calculadora</p>

     <EnderecoForm/>


</>
    );
  }
  