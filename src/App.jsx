import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import { useLang } from './i18n/LanguageContext.jsx';

export default function App() {
  const { t } = useLang();
  return (
    <>
      <a className="skip-link" href="#inhalt">{t('skip')}</a>
      <Header />
      <main id="inhalt">
        <Home />
      </main>
      <Footer />
    </>
  );
}
