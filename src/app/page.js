'use client';
import {useState}from "react";
import Topo from "./Topo/Topo";
import Rodape from "./Rodape/Rodape";
import Banner from "./Secao_Banner/banner";
import SecaoExperienciaDeTrabaho from "./Secao_Experiencia_de_trabalho/Secao_experiencia";
import estilos from "./page.module.css";

export default function Home() {
const[ehTemaEscuro,setehTemaEscuro]= useState(false)
function alterarTema(){
  setehTemaEscuro(!ehTemaEscuro)
}
  return (
    <div className={estilos.container}>
      <Topo alterarTema={alterarTema} ehTemaEscuro={ehTemaEscuro}/>
      <main>
       <Banner ehTemaEscuro={ehTemaEscuro}/>
       <SecaoExperienciaDeTrabaho ehTemaEscuro={ehTemaEscuro}/>
       </main>
        <Rodape ehTemaEscuro={ehTemaEscuro}/>
          </div>
  );
}
