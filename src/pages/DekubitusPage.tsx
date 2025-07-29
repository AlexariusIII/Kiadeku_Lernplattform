import React, { useState } from "react";
import dekubitus1 from '../assets/dekubitus1.jpg';
import dekubitus2 from '../assets/dekubitus2.jpg';
import dekubitus3 from '../assets/dekubitus3.jpg';
import dekubitus4 from '../assets/dekubitus4.jpg';

const categories = [
  {
    image: dekubitus1,
    label: "Kategorie/Stadium 1",
    definition: "Nicht wegdrückbare, umschriebene Rötung bei intakter Haut, gewöhnlich über einem knöchernen Vorsprung. Bei dunkel pigmentierter Haut kann das Abblassen schwer erkennbar sein, die Farbe kann sich aber vom umliegenden Gewebe unterscheiden. Der Bereich kann schmerzhaft, härter, weicher, wärmer oder kälter im Vergleich zum angrenzenden Gewebe sein.",
  },
  {
    image: dekubitus2,
    label: "Kategorie/Stadium 2",
    definition: "Teilzerstörung der Haut bis zur Dermis, die als flaches, offenes Ulcus mit einem rot bis rosafarbenen Wundbett ohne Beläge in Erscheinung tritt. Kann auch als intakte oder offene/rupturierte, mit Serum gefüllte Blase auftreten.",
  },
  {
    image: dekubitus3,
    label: "Kategorie/Stadium 3",
    definition: "Zerstörung aller Hautschichten. Subkutanes Fett kann sichtbar sein, jedoch keine Faszien, Muskeln, Sehnen, Bänder, Knorpel und/oder Knochen. Beläge, Taschenbildungen oder Unterminierungen können vorhanden sein. Wenn Beläge das Ausmaß des Gewebeverlusts verdecken, handelt es sich um einen uneinstufbaren/nicht klassifizierbaren Dekubitus.",
  },
  {
    image: dekubitus4,
    label: "Kategorie/Stadium 4",
    definition: "Vollständiger Gewebeverlust mit freiliegenden Knochen, Sehnen oder Muskeln. Beläge können vorhanden sein. Häufig treten Taschenbildungen und Unterminierungen auf. Freiliegender Knochen oder Sehne ist sichtbar oder direkt tastbar.",
  },
  {
    image: null,
    label: "Uneinstufbarer/ Nicht klassifizierbarer Dekubitus (unbekannte Tiefe)",
    definition: "Vollständiger Gewebeverlust, bei dem das Ausmaß der Gewebeschädigung nicht feststellbar ist, da es durch Beläge verdeckt ist.",
  },
  {
    image: null,
    label: "Vermutete tiefe Gewebsschädigung (unbekannte Tiefe)",
    definition: "Intakte oder nicht intakte Haut mit lokal begrenzter, anhaltender, nicht wegdrückbarer tiefroter, dunkelroter oder violetter Verfärbung oder mit Ablösung der Epidermis, die ein dunkles Wundbett oder eine mit Blut gefüllte Blase zeigt. Schmerz und Temperaturveränderungen treten häufig vor den Hautveränderungen auf. Die Verfärbung kann bei dunkel pigmentierter Haut anders aussehen. Die Wunde kann sich schnell weiterentwickeln und das tatsächliche Ausmaß der Gewebeschädigung offenbaren oder sich ohne Gewebeverlust zurückbilden.",
  },
];

const DekubitusPage: React.FC = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <section className="w-full max-w-6xl text-center mx-auto px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Lehrplattform Dekubitus</h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        Ein Dekubitus ist definiert als eine lokale begrenzte Schädigung der Haut und/oder des darunterliegenden Gewebes infolge von Druck oder von Druck in Kombination mit Scherkräften. Dekubitus treten in der Regel über knöchernen Vorsprüngen auf, können aber auch im Zusammenhang mit medizinischen Geräten oder anderen Objekten entstehen.
      </p>

      <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Kategorien/Stadien des Dekubitus</h3>

      <div className="flex flex-col gap-8">
        {categories.map((cat) => (
          <div key={cat.label} className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden text-left">
            {cat.image && (
              <div className="flex-shrink-0 flex items-center justify-center bg-gray-50 p-6 md:p-8">
                <img
                  src={cat.image}
                  alt={`Beispielbild ${cat.label}`}
                  className="w-60 h-60 object-cover rounded-lg cursor-pointer transition-transform hover:scale-105 shadow-md"
                  onClick={() => setModalImage(cat.image!)}
                />
              </div>
            )}
            <div className="flex-1 p-6 md:p-8 flex flex-col gap-2">
              <span className="inline-block bg-teal-100 text-teal-800 text-xl font-bold px-4 py-1 rounded-full shadow-sm mb-2">{cat.label}</span>
              <span className="text-gray-800 text-lg">{cat.definition}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-left text-xs text-gray-600 mt-8 space-y-2">
        <p>Quellen:</p>
        <ul className="list-disc list-inside">
          <li>European Pressure Ulcer Advisory Panel, National Pressure Injury Advisory Panel & Pan Pacific Pressure Injury Alliance. (2019). Prevention and treatment of pressure ulcers/injuries: Clinical practice guideline. Emily Haesler (Hrsg.). EPUAP/NPIAP/PPPIA. Verfügbar unter: <a href="https://internationalguideline.com/2019" className="underline text-blue-700" target="_blank" rel="noopener noreferrer">https://internationalguideline.com/2019</a> (Zugriff: 17.07.2015)</li>
          <li>Initiative Chronische Wunden e.V. (2024). Indikationskarte der Initiative Chronische Wunden. Klassifikation des Dekubitus nach EPUAP. Initiative Chronische Wunden e.V. Verfügbar unter: <a href="https://www.icwunden.de/wp-content/uploads/2024/04/Dekubitus.pdf" className="underline text-blue-700" target="_blank" rel="noopener noreferrer">https://www.icwunden.de/wp-content/uploads/2024/04/Dekubitus.pdf</a> (Zugriff: 17.07.2015)</li>
        </ul>
      </div>

      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setModalImage(null)}
        >
          <img
            src={modalImage}
            alt="Expanded"
            className="max-w-full max-h-[90vh] rounded shadow-lg"
            onClick={e => e.stopPropagation()}
          />
          <button
            className="absolute top-6 right-8 text-white text-3xl font-bold"
            onClick={() => setModalImage(null)}
            aria-label="Close"
          >
            &times;
          </button>
        </div>
      )}
    </section>
  );
};

export default DekubitusPage; 