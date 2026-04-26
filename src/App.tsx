/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Academic from './components/Academic';
import Vision from './components/Vision';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Certifications />
        <Academic />
        <Vision />
      </main>
      <Footer />
    </div>
  );
}
