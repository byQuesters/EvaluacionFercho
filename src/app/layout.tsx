import './globals.css';
import AccessibilityPanel from './components/AccessibilityPanel';
import Navigation from './components/Navigation';
import { ReactNode } from 'react';
import Footer from './components/Footer';

export const metadata = {
  title: 'ODS - Objetivos de Desarrollo Sostenible',
  description: 'Sitio web informativo sobre los Objetivos de Desarrollo Sostenible con características de accesibilidad completas',
  keywords: 'ODS, Objetivos de Desarrollo Sostenible, accesibilidad, sostenibilidad',
  authors: [{ name: 'Tu Nombre' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#1a5632',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-gray-900 transition-colors duration-300 font-sans">
        <a 
          href="#main-content" 
          className="skip-link sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:bg-green-700 focus:text-white focus:px-4 focus:py-2 focus:rounded focus:z-50"
        >
          Saltar al contenido principal
        </a>
        
        <Navigation />
        <AccessibilityPanel />
        
        <main id="main-content" role="main" className="flex-grow">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}