import React, { useState } from "react";
import "./Header.scss";
import { FaBars } from "react-icons/fa6";

export default function Header() {
    const [showNav, setShowNav] = useState(false);

    return (
        <header className="header">
            <nav className="row container">
                <a href="/" aria-label="Logo" className="col-2 logo">
                    <img src="/logo.svg" alt="Logo" />
                </a>

                <ul
                    className={`col-10 display-flex flex-j-end flex-a-center menu-principal ${
                        showNav === true ? "open" : ""
                    }`}
                >
                    <li className="logo-sidebar">
                        <img src="/logo-invert.svg" alt="Logo" />
                    </li>
                    <li>
                        <a href="#hero" title="Home">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#projetos">Projetos</a>
                    </li>
                    <li>
                        <a href="#experiencia">Experiência</a>
                    </li>
                    <li>
                        <a href="#habilidades">Habilidades</a>
                    </li>
                    <li>
                        <a href="#contato">Contato</a>
                    </li>
                </ul>

                <span
                    title="Menu"
                    aria-label="Menu"
                    role="button"
                    className="menu-toggle"
                    onClick={() => setShowNav(!showNav)}
                >
                    <FaBars />
                </span>

                <div
                    className={`nav-backdrop ${showNav === true ? "show" : ""}`}
                    onClick={() => setShowNav(!showNav)}
                ></div>
            </nav>
        </header>
    );
}
