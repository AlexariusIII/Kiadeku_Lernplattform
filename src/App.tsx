import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DekubitusPage from "./pages/DekubitusPage";
import IADPage from "./pages/IADPage";
import QuizPage from "./pages/QuizPage";
import KontaktPage from "./pages/KontaktPage";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="w-full min-h-[90vh] flex flex-col items-center">
        <nav className="w-full bg-gray-100 border-b border-gray-200 shadow-sm mb-10 py-4 flex justify-center text-lg">
          <ul className="flex gap-10">
            <li><Link className="text-gray-800 font-semibold px-4 py-2 rounded hover:bg-teal-500 hover:text-white transition text-lg" to="/">Home</Link></li>
            <li><Link className="text-gray-800 font-semibold px-4 py-2 rounded hover:bg-teal-500 hover:text-white transition text-lg" to="/dekubitus">Dekubitus</Link></li>
            <li><Link className="text-gray-800 font-semibold px-4 py-2 rounded hover:bg-teal-500 hover:text-white transition text-lg" to="/iad">IAD</Link></li>
            <li><Link className="text-gray-800 font-semibold px-4 py-2 rounded hover:bg-teal-500 hover:text-white transition text-lg" to="/quiz">Quiz</Link></li>
            <li><Link className="text-gray-800 font-semibold px-4 py-2 rounded hover:bg-teal-500 hover:text-white transition text-lg" to="/kontakt">Kontakt</Link></li>
          </ul>
        </nav>
        <main className="flex flex-col items-center w-full flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dekubitus" element={<DekubitusPage />} />
            <Route path="/iad" element={<IADPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/kontakt" element={<KontaktPage />} />
          </Routes>
        </main>
        <footer className="mt-10 text-sm text-gray-400 text-center w-full">
          <p>&copy; {new Date().getFullYear()} KIADEKU Lernplattform. Alle Rechte vorbehalten.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
