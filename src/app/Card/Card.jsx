'use client';
import { useState } from 'react';
import estilos from './Card.module.css';


export default function Cards(props){
    const [foiClicado, setFoiClicado] = require('react').useState(false);
   // Lógica para decidir qual classe aplicar
    const obterClasseCard = () => {
        if (props.ehTemaEscuro) {
            return foiClicado ? estilos.card_selecionado_escuro : estilos.card_modo_escuro;
        } else {
            return foiClicado ? estilos.card_selecionado_claro : estilos.card_modo_claro;
        }
    };

    return (
        <div 
            onClick={() => setFoiClicado(!foiClicado)} 
            className={`${estilos.card_base} ${obterClasseCard()}`}
        >
            <div className={estilos.container}>
                <span>{props.data}</span>
                <h3>{props.titulo}</h3>
                <small>{props.empresa}</small>
            </div>
            <p>{props.paragrafo}</p>
        </div>
    );
}
