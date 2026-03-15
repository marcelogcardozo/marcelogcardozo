import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { Hero } from './components/sections/Hero';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Education } from './components/sections/Education';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-bg text-text transition-colors">
          <Analytics />
          <main>
            <Hero />
            <Experience />
            <Projects />
            <Skills />
            <Education />
          <Contact />
          <Footer />
          </main>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
