'use client';

import Link from 'next/link';

const odsList = [
  { id: 1, title: 'Fin de la pobreza', color: 'bg-red-600' },
  { id: 2, title: 'Hambre cero', color: 'bg-amber-600' },
  { id: 3, title: 'Salud y bienestar', color: 'bg-green-600' },
  { id: 4, title: 'Educación de calidad', color: 'bg-red-700' },
  { id: 5, title: 'Igualdad de género', color: 'bg-yellow-500' },
  { id: 6, title: 'Agua limpia y saneamiento', color: 'bg-blue-600' },
  { id: 7, title: 'Energía asequible y no contaminante', color: 'bg-yellow-600' },
  { id: 8, title: 'Trabajo decente y crecimiento económico', color: 'bg-red-800' },
  { id: 9, title: 'Industria, innovación e infraestructura', color: 'bg-orange-600' },
  { id: 10, title: 'Reducción de las desigualdades', color: 'bg-purple-600' },
  { id: 11, title: 'Ciudades y comunidades sostenibles', color: 'bg-yellow-700' },
  { id: 12, title: 'Producción y consumo responsables', color: 'bg-amber-800' },
  { id: 13, title: 'Acción por el clima', color: 'bg-green-700' },
  { id: 14, title: 'Vida submarina', color: 'bg-blue-700' },
  { id: 15, title: 'Vida de ecosistemas terrestres', color: 'bg-green-800' },
  { id: 16, title: 'Paz, justicia e instituciones sólidas', color: 'bg-blue-800' },
  { id: 17, title: 'Alianzas para lograr los objetivos', color: 'bg-indigo-800' },
];

export default function ODSGrid() {
  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5"
      role="grid"
    >
      {odsList.map(ods => (
        <Link
          key={ods.id}
          href={`/tema/`}
          className={`${ods.color} text-white aspect-square rounded-xl flex flex-col items-center justify-center text-center p-3 shadow-lg transform transition-all duration-200 hover:scale-105 focus:scale-105 focus:outline-none focus:ring-4 focus:ring-white`}
          aria-label={`ODS ${ods.id}: ${ods.title}`}
        >
          <span className="text-3xl font-extrabold drop-shadow-sm">{ods.id}</span>
          <span className="text-sm mt-2 leading-snug">{ods.title}</span>
        </Link>
      ))}
    </div>
  );
}
