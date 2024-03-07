import "./Projetos.scss";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Projetos() {
    var site_1 = "https://emprestimofacil.com";
    var site_2 = "https://www.terrativa.com.br";
    var site_3 = "https://www.novapotash.com";
    var site_4 = "https://www.injetec.com.br";

    return (
        <section id="projetos" className="projetos row container">
            <div className="col-12">
                <h2>
                    Projetos<span>.</span>
                </h2>
            </div>
            <div className="col-6">
                <div className="projetos-item margin-right-2">
                    <div className="projetos-item-inner">
                        <img src="/ef.webp" alt="Projeto Emprestimofacil.com" />
                    </div>
                    <div className="projetos-item-link">
                        <p>Emprestimofacil.com</p>
                        <a
                            href={`${site_1}`}
                            target="_blank"
                            rel="noreferrer"
                            title="Ir para Emprestimofacil.com"
                            aria-label="Ir para Emprestimofacil.com"
                        >
                            <FaArrowRightLong />
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="projetos-item margin-left-2">
                    <div className="projetos-item-inner">
                        <img src="/terrativa.webp" alt="Projeto Terrativa" />
                    </div>
                    <div className="projetos-item-link">
                        <p>Terrativa</p>
                        <a
                            href={`${site_2}`}
                            target="_blank"
                            rel="noreferrer"
                            title="Ir para Terrativa"
                            aria-label="Ir para Terrativa"
                        >
                            <FaArrowRightLong />
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="projetos-item margin-right-2">
                    <div className="projetos-item-inner">
                        <img src="/potash.webp" alt="Projeto Nova Potash" />
                    </div>
                    <div className="projetos-item-link">
                        <p>Nova Potash</p>
                        <a
                            href={`${site_3}`}
                            target="_blank"
                            rel="noreferrer"
                            title="Ir para Nova Potash"
                            aria-label="Ir para Nova Potash"
                        >
                            <FaArrowRightLong />
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="projetos-item margin-left-2">
                    <div className="projetos-item-inner">
                        <img src="/injetec.webp" alt="Projeto Injetec" />
                    </div>
                    <div className="projetos-item-link">
                        <p>Injetec</p>
                        <a
                            href={`${site_4}`}
                            target="_blank"
                            rel="noreferrer"
                            title="Ir para Injetec"
                            aria-label="Ir para Injetec"
                        >
                            <FaArrowRightLong />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
