import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#inhalt">Zum Inhalt springen</a>
      <Header />
      <main id="inhalt">
        <Home />
      </main>
      <Footer />
    </>
  );
}
