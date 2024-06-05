//en esta seccion esta el encabezado con logo y lista 
function Encabezado() {
    return (
        <header className="header-container">
            <nav className="encabezado">
                <img src="../img/logoSena.png" alt="sena logo" className="logo" />
                <h1 className="color">SENA</h1>
            </nav>
            <nav className="lista">
                <ul className="nav-lista">
                    <li className="nav-item">inicio</li>
                    <li className="nav-item">mision</li>
                    <li className="nav-item">vision</li>
                </ul>
            </nav>
        </header>
    );
}
/*----------------------------------------------------------------------------------------------------------------------------------------------------------------*/


//el cuerpo
function Cuerpo() {
    return (
            <nav className="imagenSena">
            <img src="../img/sena.gif" alt="sena logo" className="logosena" />
            </nav>
    )
}

//informacion del sena
function SENA() {
    return (
        <section className="mision-vision-container">
            <div className="mision">
                <h2>Qué es el SENA:</h2>
                <p> El SENA es una entidad pública colombiana que ofrece formación gratuita en diversos sectores productivos. Su objetivo es preparar a las personas para el trabajo y contribuir al desarrollo social y económico del país.</p>
            </div>
        </section>
        
    );
}




//mision y vision
function MisionVision() {
    return (
        <section className="mision-vision-container">
            <div className="mision">
                <h2>Misión</h2>
                <p>El SENA está  encargado de cumplir la función que le corresponde al Estado de invertir en el desarrollo social y técnico de los trabajadores colombianos, ofreciendo y ejecutando la formación profesional integral, para la incorporación y el desarrollo de las personas en actividades productivas que contribuyan al desarrollo social, económico y tecnológico del país (Ley 119/1994).</p>
            </div>
            <div className="vision">
                <h2>Visión</h2>
                <p>Para el año 2026, el Servicio Nacional de Aprendizaje - SENA estará a la vanguardia de la cualificación del talento humano, tanto a nivel nacional como internacional. Esto se logrará a través de la formación profesional integral, el empleo, el emprendimiento y el reconocimiento de aprendizajes previos. Nuestro objetivo es generar valor público y fortalecer la economía campesina, popular, verde y digital, siempre con un enfoque diferencial orientado a la construcción del cambio, la transformación productiva, la soberanía alimentaria y la consolidación de una paz total, materializando así la autonomía territorial, y promoviendo la justicia social, ambiental y económica.</p>
            </div>
        </section>
        
    );
}
//-------------------------------------------------------------------------
function FormularioDeContacto() {
    return (
        <div className="wrapper">
            <form className="formulario-contacto">
                <h2>Contacto</h2>
                <div className="grupo-formulario">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre" required />
                </div>
                <div className="grupo-formulario">
                    <label htmlFor="correo">Correo Electrónico</label>
                    <input type="email" id="correo" name="correo" required />
                </div>
                <div className="grupo-formulario">
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea id="mensaje" name="mensaje" rows="4" required></textarea>
                </div>
                <button type="submit" className="boton-enviar">Enviar</button>
            </form>
        </div>
    );
}




const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
    <>
        <Encabezado />
        <Cuerpo />
        <SENA />
        <MisionVision />
        <FormularioDeContacto />
    </>
);
