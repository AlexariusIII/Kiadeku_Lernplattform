import React, { useState } from "react";
import dekubitus1 from '../assets/dekubitus1.jpg';
import dekubitus2 from '../assets/dekubitus2.jpg';
import dekubitus3 from '../assets/dekubitus3.jpg';
import iad1A from '../assets/iad1A.jpeg';
import iad2A from '../assets/iad2A.jpeg';

const dekubitusCategories = [
  { value: "Dekubitus 1", label: "Kategorie 1" },
  { value: "Dekubitus 2", label: "Kategorie 2" },
  { value: "Dekubitus 3", label: "Kategorie 3" },
  { value: "Dekubitus 4", label: "Kategorie 4" },
];
const iadCategories = [
  { value: "IAD 1A", label: "1A" },
  { value: "IAD 1B", label: "1B" },
  { value: "IAD 2A", label: "2A" },
  { value: "IAD 2B", label: "2B" },
];

const quizImages = [
  { image: dekubitus1, answer: "Dekubitus 1" },
  { image: iad1A, answer: "IAD 1A" },
  { image: dekubitus2, answer: "Dekubitus 2" },
  { image: iad2A, answer: "IAD 2A" },
  { image: dekubitus3, answer: "Dekubitus 3" },
];

type QuizAnswer = { main: 'Dekubitus' | 'IAD' | null; category: string | null };
const initialAnswers: QuizAnswer[] = quizImages.map(() => ({ main: null, category: null }));

const QuizPage: React.FC = () => {
  const [userAnswers, setUserAnswers] = useState<QuizAnswer[]>(initialAnswers);
  const [showSummary, setShowSummary] = useState(false);

  const handleMainSelect = (idx: number, main: 'Dekubitus' | 'IAD') => {
    const updated = userAnswers.map((ans, i) =>
      i === idx ? { main, category: null } : ans
    );
    setUserAnswers(updated);
  };

  const handleCategorySelect = (idx: number, category: string) => {
    const updated = userAnswers.map((ans, i) =>
      i === idx ? { ...ans, category } : ans
    );
    setUserAnswers(updated);
    if (updated.every(ans => ans.category !== null)) {
      setShowSummary(true);
    }
  };

  const correctCount = userAnswers.filter((ans, idx) => ans.category === quizImages[idx].answer).length;

  return (
    <section className="w-full max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Quiz: Dekubitus & IAD Kategorien</h2>
      <p className="text-lg text-gray-700 mb-8">Schau dir die Bilder an, wähle zuerst die richtige Gruppe und dann die passende Kategorie.</p>

      <div className="flex flex-col gap-10">
        {quizImages.map((q, idx) => (
          <div key={idx} className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg p-6 gap-8">
            <img
              src={q.image}
              alt={`Quiz Bild ${idx + 1}`}
              className="w-60 h-60 object-cover rounded-lg shadow-md mb-4 md:mb-0"
            />
            <div className="flex-1 flex flex-col items-center md:items-start">
              <span className="text-lg font-semibold text-gray-800 mb-4">Bild {idx + 1}</span>
              {/* Step 1: Main selection */}
              <div className="flex gap-6 mb-4">
                {['Dekubitus', 'IAD'].map(main => (
                  <button
                    key={main}
                    className={`px-6 py-2 rounded font-bold border-2 transition text-lg ${userAnswers[idx].main === main ? 'bg-teal-500 text-white border-teal-500' : 'bg-gray-100 text-gray-800 border-gray-300 hover:bg-teal-100'}`}
                    disabled={userAnswers[idx].category !== null}
                    onClick={() => handleMainSelect(idx, main as 'Dekubitus' | 'IAD')}
                  >
                    {main}
                  </button>
                ))}
              </div>
              {/* Step 2: Category selection */}
              {userAnswers[idx].main && (
                <div className="flex flex-wrap gap-4 mb-2 justify-center md:justify-start">
                  {(userAnswers[idx].main === 'Dekubitus' ? dekubitusCategories : iadCategories).map(opt => (
                    <button
                      key={opt.value}
                      className={`px-4 py-2 rounded font-bold border-2 transition text-base ${userAnswers[idx].category === opt.value ? 'bg-teal-500 text-white border-teal-500' : 'bg-gray-100 text-gray-800 border-gray-300 hover:bg-teal-100'}`}
                      disabled={userAnswers[idx].category !== null}
                      onClick={() => handleCategorySelect(idx, opt.value)}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
              {userAnswers[idx].category !== null && (
                <span className={`text-md font-medium ${userAnswers[idx].category === quizImages[idx].answer ? 'text-green-600' : 'text-red-500'}`}>
                  {userAnswers[idx].category === quizImages[idx].answer ? 'Richtig!' : `Falsch! Richtige Antwort: ${quizImages[idx].answer}`}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {showSummary && (
        <div className="mt-10 p-6 bg-teal-50 rounded-xl shadow text-center">
          <h3 className="text-2xl font-bold text-teal-700 mb-2">Dein Ergebnis</h3>
          <p className="text-lg text-gray-800 mb-2">Du hast {correctCount} von {quizImages.length} richtig beantwortet.</p>
          <ul className="mb-4 text-left mx-auto max-w-md">
            {quizImages.map((q, idx) => (
              <li key={idx} className="mb-2">
                <span className="font-semibold">Bild {idx + 1}:</span> Deine Antwort: <span className={userAnswers[idx].category === q.answer ? 'text-green-600' : 'text-red-500'}>{userAnswers[idx].category || '-'}</span> {userAnswers[idx].category !== q.answer && (<span className="text-gray-700">(Richtig: {q.answer})</span>)}
              </li>
            ))}
          </ul>
          <button
            className="mt-4 px-6 py-2 rounded bg-teal-500 text-white font-bold text-lg hover:bg-teal-600 transition"
            onClick={() => { setUserAnswers(initialAnswers); setShowSummary(false); }}
          >
            Quiz erneut starten
          </button>
        </div>
      )}
    </section>
  );
};

export default QuizPage; 