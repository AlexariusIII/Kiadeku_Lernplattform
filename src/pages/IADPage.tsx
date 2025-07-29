import React, { useState } from "react";
import iad1A from '../assets/iad1A.jpeg';
import iad1B from '../assets/iad1B.jpeg';
import iad2A from '../assets/iad2A.jpeg';
import iad2B from '../assets/iad2B.jpeg';

const categories = [
  {
    image: iad1A,
    label: "1A",
    definition: "Anhaltende Rötung ohne klinische Zeichen einer Infektion",
    entscheidend: "Anhaltende Rötung",
    zusatz: (
      <>
        Verschiedene Rottöne können vorhanden sein. Bei PatientInnen mit dunklerer Hautfarbe kann die Haut heller oder dunkler als normal oder violett erscheinen.
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Abgegrenzte Bereiche oder Verfärbung von einem vorangegangenen (verheilten) Hautdefekt</li>
          <li>Glänzend erscheinende Haut</li>
          <li>Mazerierte Haut</li>
          <li>Intakte kleine und/oder große Blasen</li>
          <li>Haut kann sich bei der Palpation gespannt oder geschwollen anfühlen</li>
          <li>Brennen, Kribbeln, Jucken oder Schmerzen</li>
        </ul>
      </>
    ),
  },
  {
    image: iad1B,
    label: "1B",
    definition: "Anhaltende Rötung mit klinischen Zeichen einer Infektion",
    entscheidend: (
      <ul className="list-disc list-inside space-y-1">
        <li>Anhaltende Rötung</li>
        <li>Zeichen einer Infektion</li>
      </ul>
    ),
    zusatz: (
      <>
        Verschiedene Rottöne können vorhanden sein. Bei PatientInnen mit dunklerer Hautfarbe kann die Haut heller oder dunkler als normal oder violett erscheinen. Wie z.B. weiß schuppende Haut (Hinweis auf eine Pilzinfektion) oder Satellitenläsionen (Pusteln um die Läsion, Hinweis auf eine Pilzinfektion mit Candida albicans)
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Abgegrenzte Bereiche oder Verfärbung von einem vorangegangenen (verheilten) Hautdefekt</li>
          <li>Glänzend erscheinende Haut</li>
          <li>Mazerierte Haut</li>
          <li>Intakte kleine und/or große Blasen</li>
          <li>Haut kann sich bei der Palpation gespannt oder geschwollen anfühlen</li>
          <li>Brennen, Kribbeln, Jucken oder Schmerzen</li>
        </ul>
      </>
    ),
  },
  {
    image: iad2A,
    label: "2A",
    definition: "Hautverlust ohne klinische Zeichen einer Infektion",
    entscheidend: "Der Hautverlust kann sich als Erosion (Verlust eines Teils oder der gesamten Epidermis, z.B. durch beschädigte kleine oder große Blasen), großflächiger Hautverlust oder Exkoriation (Verlust der Epidermis und Teil der Dermis) zeigen. Das Muster/Die Form des Hautschadens kann diffus sein.",
    zusatz: (
      <>
        Anhaltende Rötung, Verschiedene Rottöne können vorhanden sein. Bei PatientInnen mit dunklerer Hautfarbe kann die Haut heller oder dunkler als normal oder violett erscheinen.
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Abgegrenzte Bereiche oder Verfärbung von einem vorangegangenen (verheilten) Hautdefekt</li>
          <li>Glänzend erscheinende Haut</li>
          <li>Mazerierte Haut</li>
          <li>Intakte kleine und/oder große Blasen</li>
          <li>Haut kann sich bei der Palpation gespannt oder geschwollen anfühlen</li>
          <li>Brennen, Kribbeln, Jucken oder Schmerzen</li>
        </ul>
      </>
    ),
  },
  {
    image: iad2B,
    label: "2B",
    definition: "Hautverlust mit klinischen Zeichen einer Infektion",
    entscheidend: (
      <ul className="list-disc list-inside space-y-1">
        <li>Hautverlust: Der Hautverlust kann sich als Erosion (Verlust eines Teils oder der gesamten Epidermis, z.B. durch beschädigte kleine oder große Blasen), großflächiger Hautverlust oder Exkoriation (Verlust der Epidermis und Teil der Dermis) zeigen. Das Muster/Die Form des Hautschadens kann diffus sein.</li>
        <li>Zeichen einer Infektion: Wie z.B. weiß schuppende Haut (Hinweis auf eine Pilzinfektion) oder Satellitenläsionen (Pusteln um die Läsion, Hinweis auf eine Pilzinfektion mit Candida albicans), sichtbare Beläge im Wundgrund (gelblich/bräunlich/gräulich), grünlich erscheinender Wundgrund (Hinweis auf eine bakterielle Infektion mit Pseudomonas aeruginosa), starke Exsudation, eitriges Exsudat oder glänzend erscheinender Wundgrund.</li>
      </ul>
    ),
    zusatz: (
      <>
        Anhaltende Rötung, Verschiedene Rottöne können vorhanden sein. Bei PatientInnen mit dunklerer Hautfarbe kann die Haut heller oder dunkler als normal oder violett erscheinen.
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Abgegrenzte Bereiche oder Verfärbung von einem vorangegangenen (verheilten) Hautdefekt</li>
          <li>Glänzend erscheinende Haut</li>
          <li>Mazerierte Haut</li>
          <li>Intakte kleine und/oder große Blasen</li>
          <li>Haut kann sich bei der Palpation gespannt oder geschwollen anfühlen</li>
          <li>Brennen, Kribbeln, Jucken oder Schmerzen</li>
        </ul>
      </>
    ),
  },
];

const IADPage: React.FC = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <section className="w-full max-w-6xl text-center mx-auto px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Inkontinenz-assoziierte Dermatitis (IAD)</h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        Inkontinenz-assoziierte Dermatitis (IAD) ist eine Form der Hautreizung, die durch längeren Kontakt mit Urin oder Fäkalien verursacht wird. Nach dem "Ghent Global IAD Categorisation Tool (GLOBIAD)" gibt es folgende Kategorien zur Beschreibung von IAD:
      </p>

      <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Kategorien der IAD</h3>

      <div className="flex flex-col gap-8">
        {categories.map((cat, idx) => (
          <div key={cat.label} className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden text-left">
            <div className="flex-shrink-0 flex items-center justify-center bg-gray-50 p-6 md:p-8">
              <img
                src={cat.image}
                alt={`Beispielbild ${cat.label}`}
                className="w-60 h-60 object-cover rounded-lg cursor-pointer transition-transform hover:scale-105 shadow-md"
                onClick={() => setModalImage(cat.image)}
              />
            </div>
            <div className="flex-1 p-6 md:p-8 flex flex-col gap-2">
              <div className="flex items-center gap-4 mb-2">
                <span className="inline-block bg-teal-100 text-teal-800 text-xl font-bold px-4 py-1 rounded-full shadow-sm">{cat.label}</span>
                <span className="text-lg font-semibold text-gray-800">{cat.definition}</span>
              </div>
              <div className="mb-1">
                <span className="font-semibold text-gray-700">Entscheidendes Kriterium: </span>
                <span className="text-gray-800">{cat.entscheidend}</span>
              </div>
              <div>
                <span className="font-semibold text-gray-700">Zusätzliche Kriterien: </span>
                <span className="text-gray-800">{cat.zusatz}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-left text-xs text-gray-600 mt-8">
        <p>Referenz: Beeckman D., Van den Bussche K., Alves P., Beele H., Ciprandi G., Coyer F., de Groot T., De Meyer D., Dunk A.M., Fourie A., García-Molina P., Gray M., Iblasi A., Jelnes R., Johansen E., Karadağ A., LeBlanc K., Kis Dadara Z., Long M.A., Meaume S., Pokorna A., Romanelli M., Ruppert S., Schoonhoven L., Smet S., Smith C., Steininger A., Stockmayr M., Van Damme N., Voegeli D., Van Hecke A., Verhaeghe S., Woo K. and Kottner J. The Ghent Global IAD Categorisation Tool (GLOBIAD). Skin Integrity Research Group - Ghent University 2017. Available to download from www.UCVVGent.be</p>
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

export default IADPage;