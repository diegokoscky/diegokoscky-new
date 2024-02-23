import "./Experiencia.scss";
import { FaCheck } from "react-icons/fa6";

export default function Experiencia() {
    return (
        <>
            <section className="experiencia row container">
                <div className="col-12">
                    <h2>
                        Experiência<span>.</span>
                    </h2>
                </div>
                <div className="col-12">
                    <p>
                        Olá! Eu sou o Diego. Há mais de uma década atuo como web
                        designer freelancer e desenvolvedor front-end.
                        Especializado na criação de sites e soluções web
                        personalizadas para destacar a sua empresa e aumentar o
                        lucro do seu negócio.
                    </p>
                </div>
                <div className="col-12">
                    <div className="experiencia-tab">
                        <div className="experiencia-tab-link">
                            <ul>
                                <li className="active">
                                    <span>Sites</span>
                                </li>
                                <li>
                                    <span>Landing Pages</span>
                                </li>
                                <li>
                                    <span>Marketing Digital</span>
                                </li>
                                <li>
                                    <span>Identidade</span>
                                </li>
                            </ul>
                        </div>
                        <div className="experiencia-tab-content">
                            <div id="sites" className="tab-content-item">
                                <h3>Design e Criação de Sites</h3>
                                <ul>
                                    <li>
                                        <FaCheck /> Processo de criação rápido,
                                        claro e objetivo
                                    </li>
                                    <li>
                                        <FaCheck /> De soluções simples até as
                                        mais robustas
                                    </li>
                                    <li>
                                        <FaCheck /> Sites institucionais, lojas,
                                        blogs e mais
                                    </li>
                                </ul>
                            </div>

                            <div
                                id="landing-pages"
                                className="tab-content-item"
                            >
                                <h3>Landing Pages</h3>
                                <ul>
                                    <li>
                                        <FaCheck />
                                        Processo de criação rápido, claro e
                                        objetivo
                                    </li>
                                    <li>
                                        <FaCheck />
                                        De soluções simples até as mais robustas
                                    </li>
                                    <li>
                                        <FaCheck />
                                        Sites institucionais, lojas, blogs e
                                        mais
                                    </li>
                                </ul>
                            </div>

                            <div
                                id="marketing-digital"
                                className="tab-content-item"
                            >
                                <h3>Marketing Digital</h3>
                                <ul>
                                    <li>
                                        <FaCheck />
                                        Processo de criação rápido, claro e
                                        objetivo
                                    </li>
                                    <li>
                                        <FaCheck />
                                        De soluções simples até as mais robustas
                                    </li>
                                    <li>
                                        <FaCheck />
                                        Sites institucionais, lojas, blogs e
                                        mais
                                    </li>
                                </ul>
                            </div>

                            <div id="identidade" className="tab-content-item">
                                <h3>Identidade</h3>
                                <ul>
                                    <li>
                                        <FaCheck />
                                        Processo de criação rápido, claro e
                                        objetivo
                                    </li>
                                    <li>
                                        <FaCheck />
                                        De soluções simples até as mais robustas
                                    </li>
                                    <li>
                                        <FaCheck />
                                        Sites institucionais, lojas, blogs e
                                        mais
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
