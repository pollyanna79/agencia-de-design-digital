import estilos from './Rodape.module.css';
import Image from 'next/image';
import Logo from "/public/logo.png";
import Face from "/public/facebook.png";
import Linkedin from "/public/linkedin.png";
import Twiter from "/public/twitter.png";
import Drible from "/public/dribble.png";
import Behance from "/public/behance.png";




export default function Rodape(props){
    return(
        <footer className={props.ehTemaEscuro ? estilos.rodape_modo_escuro : estilos.rodape_modo_claro}>
             <div className={estilos.container_informacoes}>
                

                <div>
                <Image className={estilos.logo} src={Logo} alt="logomarca"/>
                <p>Ajudamos a criar uma personalidade digital construindo sua marca no
                ambiente online utilizando estratégias,ferramentas e tecnologias 
                personalizadas. </p>
                </div>
                <div>
            <Image className={estilos.Face} src={Face} alt="face"/>
            <Image className={estilos.In} src={Linkedin} alt="Linkedin"/>
            <Image className={estilos.Xins} src={Twiter} alt="Twiter"/>
            <Image className={estilos.Drible} src={Drible} alt="Drible"/>
            <Image className={estilos.Beache} src={Behance} alt="Behance"/>
                </div>
                </div>
                <div className={estilos.copyright}>
                    <p>Copyright 2022 nome do <span>Pollyanna</span></p>
                </div>

           
        </footer>
    )
}