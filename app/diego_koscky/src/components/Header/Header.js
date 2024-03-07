import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Header.scss";
import { FaBars } from "react-icons/fa6";

export default function Header() {
    const [showNav, setShowNav] = useState(false);
    const duration = 600;

    return (
        <header id="header" className="header">
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
                        <Link
                            to="header"
                            title="Home"
                            smooth={true}
                            duration={duration}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="projetos"
                            title="Projetos"
                            smooth={true}
                            duration={duration}
                        >
                            Projetos
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="experiencia"
                            title="Experiência"
                            smooth={true}
                            duration={duration}
                        >
                            Experiência
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="habilidades"
                            title="Habilidades"
                            smooth={true}
                            duration={duration}
                        >
                            Habilidades
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="contato"
                            title="Contato"
                            smooth={true}
                            duration={duration}
                        >
                            Contato
                        </Link>
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
