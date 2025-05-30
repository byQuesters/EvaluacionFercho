'use client';

export default function CV() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-800 mb-2">Alberto Ambriz</h1>
        <p className="text-xl text-gray-600">Ingeniero de Software</p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-green-800 border-b border-green-200 pb-2 mb-4">Perfil Profesional</h2>
        <p className="text-gray-700">
          Desarrollador de Software Profesional comprometido con los Objetivos de Desarrollo Sostenible, con experiencia en proyectos de sostenibilidad ambiental y desarrollo comunitario. Capacidad para diseñar e implementar estrategias alineadas con los ODS.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-green-800 border-b border-green-200 pb-2 mb-4">Experiencia Laboral</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800">Coordinador de Proyectos Sostenibles de software</h3>
          <p className="text-gray-600">Organización XYZ | 2020 - Presente</p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
            <li>Diseño e implementación de proyectos alineados con los ODS 7, 11 y 13</li>
            <li>Coordinación de equipos multidisciplinarios</li>
            <li>Elaboración de informes de impacto sostenible</li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-green-800 border-b border-green-200 pb-2 mb-4">Educación</h2>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Maestría en Desarrollo Sostenible</h3>
          <p className="text-gray-600">Universidad ABC | 2018 - 2020</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-green-800 border-b border-green-200 pb-2 mb-4">Habilidades</h2>
        <div className="flex flex-wrap gap-2">
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">ODS</span>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">Sostenibilidad</span>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">Gestión de Proyectos</span>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">Análisis de Impacto</span>
        </div>
      </section>
    </div>
  );
}