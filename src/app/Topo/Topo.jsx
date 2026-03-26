import estilos from './topo.module.css';
import Image from 'next/image';




export default function Topo(props){
    return(
        <header className={props.ehTemaEscuro ? estilos.topo_modo_escuro : estilos.topo_modo_claro}>
        <Image src ="/logo.png" width={100} height={50} alt="logomarca"/>
        
        <button onClick={props.alterarTema} className ={props.ehTemaEscuro ? estilos.btn_modo_escuro : estilos.btn_modo_claro}>
         <Image 
                    className={estilos.iconeBtn} 
                    src={props.ehTemaEscuro ? "/moon.png" : "/sun.png"} 
                    width={30} 
                    height={30} 
                    alt="icone"
                />
        </button>

        </header>
    )
}