import './Ubicacion.scss'


const Ubicacion = () =>{

    return(
        <section id='UBICACION'>
            <div className='center'>
                <h2>- UBICACION -</h2>
            </div>
            <div className='fondo'>
                <div className='center'>
                    <h3>Calle 1234</h3>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d789.3337513492598!2d-63.16123643034871!3d-37.68833073696973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95e96b71337d7ed9%3A0x7ca12fa95b2b54af!2sDarregueira%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1681450358577!5m2!1ses!2sar" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    )
}

export default Ubicacion