import "./Footer.scss";
import { IoMdHeart } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Footer() {
    var whatsapp = "https://api.whatsapp.com/send?phone=5531987179432";
    var celular = "tel:+5531987179432";
    var blog = "https://diegokoscky.com.br/blog/";

    return (
        <footer className="footer">
            <div className="container row">
                <div className="col-6 footer-logo">
                    <img src="/logo.svg" alt="Logo" className="logo" />
                    <p>
                        Vamos trabalhar juntos<span>?</span>
                    </p>
                    <p>
                        <a
                            href={`${celular}`}
                            title="Me ligue agora"
                            className="footer-tel"
                        >
                            Tel.: (31) 98717-9432
                        </a>
                    </p>
                </div>
                <div className="col-6 footer-legal">
                    <p>© Todos os direitos reservados</p>
                    <p>
                        Feito com
                        <IoMdHeart />
                        por{" "}
                        <a
                            href={`${blog}`}
                            title="Blog Diego Koscky"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Diego Koscky
                        </a>
                    </p>
                </div>
            </div>

            <a
                href={`${whatsapp}`}
                className="btn-whatsapp"
                title="Me chame no Whatsapp"
                target="_blank"
                rel="noreferrer"
            >
                <IoLogoWhatsapp />
            </a>
        </footer>
    );
}
