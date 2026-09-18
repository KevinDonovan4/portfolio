import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Journey from './components/Journey/Journey';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
export default function App() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Journey />
                <Projects />
                <Services />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
