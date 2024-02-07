import "./styles/globals.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import BodyScripts from "./components/Scripts/BodyScripts";

function App() {
    return (
        <>
            <Header />
            <main>
                <Hero />
            </main>
            <Footer />
            <BodyScripts />
        </>
    );
}

export default App;
