import React, { useState } from "react";
import "./Experiencia.scss";
import { FaCheck } from "react-icons/fa6";

export default function Experiencia() {
    const [showTabSites, setShowTabSites] = useState(true);
    const [showTabLP, setShowTabLP] = useState(false);
    const [showTabMK, setShowTabMK] = useState(false);
    const [showTabId, setShowTabId] = useState(false);

    function tabSites() {
        setShowTabSites(true);
        setShowTabLP(false);
        setShowTabMK(false);
        setShowTabId(false);

        return;
    }

    function tabLP() {
        setShowTabSites(false);
        setShowTabLP(true);
        setShowTabMK(false);
        setShowTabId(false);

        return;
    }

    function tabMK() {
        setShowTabSites(false);
        setShowTabLP(false);
        setShowTabMK(true);
        setShowTabId(false);

        return;
    }

    function tabId() {
        setShowTabSites(false);
        setShowTabLP(false);
        setShowTabMK(false);
        setShowTabId(true);

        return;
    }

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
                                <li
                                    className={`${
                                        showTabSites === true ? "active" : ""
                                    }`}
                                >
                                    <span onClick={tabSites}>Sites</span>
                                </li>
                                <li
                                    className={`${
                                        showTabLP === true ? "active" : ""
                                    }`}
                                >
                                    <span onClick={tabLP}>Landing Pages</span>
                                </li>
                                <li
                                    className={`${
                                        showTabMK === true ? "active" : ""
                                    }`}
                                >
                                    <span onClick={tabMK}>
                                        Marketing Digital
                                    </span>
                                </li>
                                <li
                                    className={`${
                                        showTabId === true ? "active" : ""
                                    }`}
                                >
                                    <span onClick={tabId}>Identidade</span>
                                </li>
                            </ul>
                        </div>
                        <div className="experiencia-tab-content">
                            <div
                                id="sites"
                                className={`tab-content-item ${
                                    showTabSites === true ? "show" : ""
                                }`}
                            >
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
                                className={`tab-content-item ${
                                    showTabLP === true ? "show" : ""
                                }`}
                            >
                                <h3>Landing Pages</h3>
                                <ul>
                                    <li>
                                        <FaCheck /> Páginas otimizadas para
                                        conversão
                                    </li>
                                    <li>
                                        <FaCheck /> Divulgue seu produto, curso,
                                        e-book ou serviço
                                    </li>
                                    <li>
                                        <FaCheck /> Crie sua base de potenciais
                                        clientes
                                    </li>
                                </ul>
                            </div>

                            <div
                                id="marketing-digital"
                                className={`tab-content-item ${
                                    showTabMK === true ? "show" : ""
                                }`}
                            >
                                <h3>Marketing Digital</h3>
                                <ul>
                                    <li>
                                        <FaCheck /> Transforme sua ideia em um
                                        negócio digital
                                    </li>
                                    <li>
                                        <FaCheck /> Melhore sua visibilidade na
                                        internet
                                    </li>
                                    <li>
                                        <FaCheck />
                                        SEO e Marketing de Conteúdo
                                    </li>
                                </ul>
                            </div>

                            <div
                                id="identidade"
                                className={`tab-content-item ${
                                    showTabId === true ? "show" : ""
                                }`}
                            >
                                <h3>Identidade</h3>
                                <ul>
                                    <li>
                                        <FaCheck /> Tenha a sua própria
                                        identidade visual e da sua empresa
                                    </li>
                                    <li>
                                        <FaCheck /> Tenha um domínio construa
                                        sua autoridade digital
                                    </li>
                                    <li>
                                        <FaCheck /> Mostre ao seu público a sua
                                        ideia, valores, missão e propósito
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
