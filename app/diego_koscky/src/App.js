import "./styles/globals.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projetos from "./components/Projetos/Projetos";
import Experiencia from "./components/Experiencia/Experiencia";
import Footer from "./components/Footer/Footer";

export default function App() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Projetos />
                <Experiencia />
            </main>
            <Footer />
        </>
    );
}
