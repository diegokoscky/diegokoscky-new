import "./Habilidades.scss";

export default function Habilidades() {
    return (
        <>
            <section id="habilidades" className="habilidades row container">
                <div className="col-12">
                    <h2>
                        Habilidades<span>.</span>
                    </h2>
                </div>
                <div className="col-3">
                    <h3>Web Design</h3>
                    <ul>
                        <li>Prototipação</li>
                        <li>UX / UI</li>
                        <li>Wireframing</li>
                        <li>Design Responsivo</li>
                        <li>Design Thinking</li>
                    </ul>
                </div>
                <div className="col-3">
                    <h3>Front-end</h3>
                    <ul>
                        <li>Javascript</li>
                        <li>Sass</li>
                        <li>CSS3</li>
                        <li>React</li>
                        <li>HTML5</li>
                    </ul>
                </div>
                <div className="col-3">
                    <h3>Marketing</h3>
                    <ul>
                        <li>SEO</li>
                        <li>Copywriting</li>
                        <li>Inbound MKT</li>
                        <li>MKT de Conteúdo</li>
                        <li>Link Building</li>
                    </ul>
                </div>
                <div className="col-3">
                    <h3>Ferramentas</h3>
                    <ul>
                        <li>Wordpress</li>
                        <li>Google Analytics</li>
                        <li>Looker Studio</li>
                        <li>Github</li>
                        <li>Adobe PS/AI/IN</li>
                    </ul>
                </div>
            </section>
        </>
    );
}
