'use client';

import Link from 'next/link';
import ODSGrid from '../components/ODSGrid';

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-16 max-w-7xl">
      {/* Hero Section */}
      <section className="text-center mb-24">
        <h1 className="text-5xl md:text-6xl font-extrabold text-green-800 mb-6 drop-shadow-sm">
          Objetivos de Desarrollo Sostenible
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
          Los ODS son un plan maestro para conseguir un futuro sostenible para todos. Conoce los 17 objetivos y cómo puedes contribuir con pequeñas acciones cotidianas.
        </p>
        <Link 
          href="/tema"
          className="inline-block bg-green-700 hover:bg-green-800 text-white font-semibold text-lg py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-600"
        >
          Explorar los ODS
        </Link>
      </section>

      {/* Objetivos Grid */}
      <section className="mb-24">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-12 text-center">
          Los 17 Objetivos
        </h2>
        <div className="px-2 md:px-6">
          <ODSGrid />
        </div>
      </section>

      {/* Qué son los ODS */}
      <section className="bg-green-50 p-10 md:p-12 rounded-3xl shadow-inner">
        <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-6">
          ¿Qué son los ODS?
        </h2>
        <p className="text-gray-700 mb-4 text-justify leading-relaxed">
          Los Objetivos de Desarrollo Sostenible (ODS), también conocidos como Objetivos Mundiales, son un llamado universal a la adopción de medidas para poner fin a la pobreza, proteger el planeta y garantizar que todas las personas gocen de paz y prosperidad.
        </p>
        <p className="text-gray-700 text-justify leading-relaxed">
          Adoptados por todos los Estados Miembros de las Naciones Unidas en 2015, los ODS constituyen una hoja de ruta global hacia un futuro mejor y más sostenible para todos.
        </p>
      </section>
    </div>
  );
}
