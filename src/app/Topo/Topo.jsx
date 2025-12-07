import estilos from './topo.module.css';
import Image from 'next/image';
import Logo from "/public/logo.png";
import iconeSol from "/public/sun.png";
import iconeLua from "/public/moon.png";



export default function Topo(props){
    return(
        <header className={props.ehTemaEscuro ? estilos.topo_modo_escuro : estilos.topo_modo_claro}>
        <Image className={estilos.logo} src={Logo} alt="logomarca"/>
        
        <button onClick={props.alterarTema} className ={props.ehTemaEscuro ? estilos.btn_modo_escuro : estilos.btn_modo_claro}>
         <Image className={estilos.iconeBtn} src={props.ehTemaEscuro ?iconeLua  :iconeSol}alt ="icone"/>
        </button>

        </header>
    )
}