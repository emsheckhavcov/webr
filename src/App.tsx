import { Header } from './components/Header/Header';
import { Catalog } from './pages/Catalog/Catalog';
import { Gallery } from './pages/Catalog/Gallery/Gallery';
import { Footer } from './pages/Catalog/Footer/Footer';

export const App = () => {
  return (
    <div>
      <Header />
      <Catalog />
      <Gallery />
      <Footer />
    </div>
  );
};