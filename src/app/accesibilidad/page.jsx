export default function Accesibilidad() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-green-800 mb-8">Declaración de Accesibilidad</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-green-800 mb-4">Compromiso con la accesibilidad</h2>
        <p className="mb-4 text-gray-700">
          Nos comprometemos a garantizar la accesibilidad digital para todas las personas, independientemente de sus capacidades. Este sitio web ha sido diseñado siguiendo las Pautas de Accesibilidad para el Contenido Web (WCAG) 2.1 nivel AA.
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-green-800 mb-4">Características de accesibilidad</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li><strong>Modo de alto contraste:</strong> Para mejorar la legibilidad</li>
          <li><strong>Ajuste de tamaño de fuente:</strong> Permite aumentar o disminuir el tamaño del texto</li>
          <li><strong>Navegación por teclado:</strong> Todo el sitio es navegable sin ratón</li>
          <li><strong>Estructura semántica:</strong> Uso adecuado de encabezados y landmarks</li>
          <li><strong>Texto alternativo:</strong> Todas las imágenes tienen descripciones</li>
          <li><strong>Controles de video:</strong> Subtítulos y transcripciones disponibles</li>
        </ul>
      </section>
      
      <section className="mb-10 bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-green-800 mb-4">Panel de accesibilidad</h2>
        <p className="mb-4 text-gray-700">
          En la esquina superior derecha de cada página encontrarás nuestro panel de accesibilidad donde puedes:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Cambiar el tamaño de la fuente</li>
          <li>Activar el modo de alto contraste</li>
          <li>Seleccionar una tipografía más legible</li>
          <li>Activar el modo oscuro</li>
        </ul>
      </section>
      
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-green-800 mb-4">Limitaciones y retroalimentación</h2>
        <p className="mb-4 text-gray-700">
          A pesar de nuestros esfuerzos, pueden existir algunas limitaciones. Si encuentras algún problema de accesibilidad o tienes sugerencias para mejorar, por favor contáctanos a través de nuestro <a href="/contacto" className="text-green-700 underline">formulario de contacto</a>.
        </p>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold text-green-800 mb-4">Normativas y estándares</h2>
        <p className="text-gray-700">
          Este sitio cumple con la normativa UNE 139803:2012 y la Directiva (UE) 2016/2102 del Parlamento Europeo sobre accesibilidad de los sitios web y aplicaciones para dispositivos móviles de los organismos del sector público.
        </p>
      </section>
    </div>
  );
}