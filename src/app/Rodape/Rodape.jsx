import estilos from './Rodape.module.css';
import Image from 'next/image';





export default function Rodape(props){
    return(
        <footer className={props.ehTemaEscuro ? estilos.rodape_modo_escuro : estilos.rodape_modo_claro}>
             <div className={estilos.container_informacoes}>
                

                <div>
                <Image src= "/logo.png" alt="Logo" width={100} height={50}/>
                <p>Ajudamos a criar uma personalidade digital construindo sua marca no
                ambiente online utilizando estratégias,ferramentas e tecnologias 
                personalizadas. </p>
                </div>
                <div>
            <Image src= "/facebook.png" width={100} height={50} alt="face"/>
            <Image src= "/linkedin.png" width={100} height={50} alt="Linkedin"/>
            <Image src="/twitter.png"width={100} height={50} alt="Twiter"/>
            <Image src="/dribble.png"width={100} height={50} alt="Drible"/>
            <Image src="/behance.png"width={100} height={50} alt="Behance"/>
                </div>
                </div>
                <div className={estilos.copyright}>
                    <p>Copyright 2026 nome do Desenvolvedor <span>Pollyanna</span></p>
                </div>

           
        </footer>
    )
}