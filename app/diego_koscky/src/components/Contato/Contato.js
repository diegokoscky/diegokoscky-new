import "./Contato.scss";
import { FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa6";

export default function Contato() {
    var contato_1 = "https://api.whatsapp.com/send?phone=5531987179432";
    var contato_2 = "https://www.linkedin.com/in/diegokoscky/";
    var contato_3 = "https://github.com/diegokoscky";
    var contato_4 = "diego@diegokoscky.com.br";

    return (
        <>
            <section className="contato row container">
                <div className="col-12">
                    <h2>
                        Contato<span>.</span>
                    </h2>
                </div>

                <div className="col-12">
                    <p>
                        Entre em contato comigo! Eu responderei o mais rápido
                        possível. Vamos tomar um café? Estou na região de Belo
                        Horizonte, MG.
                    </p>
                </div>

                <div className="redes col-12">
                    <ul>
                        <li>
                            <a
                                href={`${contato_1}`}
                                target="_blank"
                                rel="noreferrer"
                                title="Me chame no Whatsapp"
                            >
                                <FaWhatsapp />
                            </a>
                        </li>
                        <li>
                            <a
                                href={`${contato_2}`}
                                target="_blank"
                                rel="noreferrer"
                                title="Me encontre no LinkedIn"
                            >
                                <FiLinkedin />
                            </a>
                        </li>
                        <li>
                            <a
                                href={`${contato_3}`}
                                target="_blank"
                                rel="noreferrer"
                                title="Me encontre no GitHub"
                            >
                                <FiGithub />
                            </a>
                        </li>
                        <li>
                            <a
                                href={`mailto:${contato_4}`}
                                target="_blank"
                                rel="noreferrer"
                                title="Me envie um e-mail"
                            >
                                <FaRegEnvelope />
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}
