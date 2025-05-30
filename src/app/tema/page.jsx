'use client';

export default function Tema() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-100 py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-green-700 mb-4">ODS 13: Acción por el Clima</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            El cambio climático representa uno de los mayores desafíos globales. Este objetivo impulsa acciones urgentes para reducir los impactos del calentamiento global.
          </p>
          <img
            src="https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1000&q=80"
            alt="ODS 13"
            className="mt-6 w-32 mx-auto"
          />
        </header>

        <section className="mb-14">
          <h2 className="text-3xl font-bold text-green-600 mb-4">¿Qué es el ODS 13?</h2>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <p className="text-gray-700 flex-1 text-justify">
              El ODS 13 tiene como objetivo adoptar medidas urgentes para combatir el cambio climático y sus efectos. Esto incluye reducir las emisiones de gases de efecto invernadero, fomentar la energía renovable y aumentar la resiliencia de las comunidades ante eventos climáticos extremos.
            </p>
            <img
              src="https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1000&q=80"
              alt="Cambio climático"
              className="rounded-xl shadow-md w-full md:w-1/2"
            />
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-3xl font-bold text-green-600 mb-4">¿Cómo podemos contribuir?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-green-50 p-6 rounded-2xl">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Usar transporte sostenible: caminar, bicicleta o transporte público.</li>
              <li>Reducir el uso de plásticos y fomentar el reciclaje.</li>
              <li>Consumir productos locales y de temporada.</li>
              <li>Ahorrar energía en el hogar con electrodomésticos eficientes.</li>
            </ul>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Participar en iniciativas de reforestación y cuidado ambiental.</li>
              <li>Educar a otros sobre el cambio climático.</li>
              <li>Apoyar políticas públicas sostenibles.</li>
              <li>Disminuir el desperdicio de agua y alimentos.</li>
            </ul>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-3xl font-bold text-green-600 mb-4">Datos clave sobre el cambio climático</h2>
          <table className="w-full table-auto border-collapse bg-white shadow-md rounded-xl overflow-hidden text-left text-gray-700">
            <thead className="bg-green-100 text-green-800">
              <tr>
                <th className="p-4">Dato</th>
                <th className="p-4">Impacto</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4">↑ 1.1 °C en temperatura global</td>
                <td className="p-4">Calentamiento global acelerado</td>
              </tr>
              <tr className="bg-green-50 border-b">
                <td className="p-4">+20 cm en nivel del mar</td>
                <td className="p-4">Riesgo para zonas costeras</td>
              </tr>
              <tr>
                <td className="p-4">Eventos extremos más frecuentes</td>
                <td className="p-4">Huracanes, sequías, incendios forestales</td>
              </tr>
            </tbody>
          </table>
          <img
            src="https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1000&q=80"
            alt="Contaminación industrial"
            className="rounded-xl shadow-md mt-6"
          />
        </section>

        <footer className="text-center mt-12 text-sm text-gray-500">
          Fuente: Naciones Unidas, IPCC, Climate Action Tracker
        </footer>
      </div>
    </div>
  );
}
