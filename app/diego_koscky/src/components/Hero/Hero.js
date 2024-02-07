import "./Hero.scss";

function Hero() {
    return (
        <section className="hero row container">
            <div className="col-7">
                <p className="margin-bottom-1">Olá!</p>
                <h1 className="margin-bottom-1">
                    Eu sou <span>Diego Koscky</span>.<br /> Um Web Designer.
                </h1>
                <p className="margin-bottom-2">
                    Web designer freelancer, desenvolvedor front-end e
                    empreendedor digital.
                </p>
                <a
                    href="#contato"
                    title="Entre em Contato"
                    className="btn btn-primary"
                >
                    Entre em Contato
                </a>
            </div>
            <div className="col-5 display-flex flex-a-center flex-j-center">
                <div className="perfil circle-radius">
                    <img
                        src="/diego-web-designer.jpg"
                        alt="Diego Web Designer"
                        className="circle-radius"
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;