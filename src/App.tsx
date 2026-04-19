import { Navbar } from './components/Navbar';
import { Home } from './sections/Home';
import { Platform } from './sections/Platform';
import { Products } from './sections/Products';
import { Solutions } from './sections/Solutions';
import { Services } from './sections/Services';
import { AboutUs } from './sections/AboutUs';
import { WhyFaaz } from './sections/WhyFaaz';
import { ContactUs } from './sections/ContactUs';
import { CaseStudies } from './sections/CaseStudies';

import { Footer } from './components/Footer';
import { ThemeProvider } from './components/theme-provider';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="faaz-theme">
      <div className="min-h-screen selection:bg-blue-500/30">
        {/* Fixed Grain Overlay */}
        <div className="grain" />
        
        <Navbar />
        
        <main>
          <Home />
          <Platform />
          <Products />
          <Solutions />
          <Services />
          <AboutUs />
          <WhyFaaz />
          <CaseStudies />
          <ContactUs />
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;