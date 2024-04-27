import './HomePage.scss'
import Reveal from '../Reveal';
import Typewriter from '../Typewriter';
import ModalCl from '../ModalCl/ModalClients';
import whatsapp from '../../assets/Whatsapp.webp'

const HomePage = () =>{
    return(
        <section id='HOME'>
            <div className='div-img'>
                <img src='./odontFondo3.jpeg' alt='imgS'className='imgS'/>
                <img src='./odontFondoMobile.jpeg' alt='imgS'className='imgResponsive'/> 
            </div>
            <a href="https://wa.me/XXXXXXXXXX" className='whatsapp' target='e_blank'>
                <img src={whatsapp} alt="WhatsApp"/>
            </a>
            <Reveal>
                <div className='sm-content'>
                    <div className='content-left'>
                        <div className='typewriter'>
                            <div className='title'>
                               <h1>Nombre Clinica Odontologica</h1>
                            </div>
                            <div className='responsiveDesktop'>
                                <Typewriter />
                            </div>
                            <div className='responsiveMobile'>
                                <h3>
                                Sonrisas radiantes, cuidado excepcional: ¡Su salud dental es nuestra prioridad!
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className='content-right'>
                        <a data-scroll="SACARTURNO" href="#SERVICIOS" className="active button2">
                            SERVICIOS
                        </a>
                        <ModalCl />
                        <a data-scroll="SACARTURNO" href="/consulta" className="active button2">
                            CONSULTA
                        </a>
                    </div>
                </div>
            </Reveal>
            
        </section>
    )
}

export default HomePage