import React from "react";
import { Link } from "react-router-dom";
import KiadekuLogo from "../assets/kiadeku_logo_final.svg";
import DekubitusSymbol from "../assets/symbols/dekubitus_symbol.png";

const HomePage = () => (
  <>
    <header className="text-center mb-16 w-full flex flex-col items-center relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50/30 via-transparent to-blue-50/30 rounded-3xl blur-3xl"></div>
      
      <div className="flex flex-col items-center justify-center mb-6 relative z-10">
        <div className="relative">
          <img src={KiadekuLogo} alt="KIADEKU Logo" className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 drop-shadow-2xl" />
          {/* Glow effect */}
          <div className="absolute inset-0 bg-teal-400/20 rounded-full blur-xl"></div>
        </div>
        <div className="flex flex-col items-center mt-6">
          <h1 className="text-5xl font-black text-brand tracking-tight mb-3 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">KIADEKU: Wissen für die Pflegepraxis</h1>
          <div className="w-16 h-1.5 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 mb-4 shadow-lg"></div>
        </div>
      </div>
      <p className="text-xl sm:text-2xl text-text font-light mt-0 opacity-90 max-w-3xl leading-relaxed relative z-10">Ihre digitale Lernplattform zur Vertiefung von Fachwissen im Bereich Dekubitus und Inkontinenz-assoziierte Dermatitis (IAD) – praxisnah, interaktiv und stets aktuell.</p>
    </header>
    
    <section className="w-full max-w-6xl mx-auto px-4 mb-16">
      <h2 className="text-4xl font-black text-gray-800 mb-12 text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Entdecken Sie unsere Lernbereiche</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Dekubitus Card */}
        <Link to="/dekubitus" className="group">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-102 border border-teal-200/50 overflow-hidden relative">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 via-transparent to-blue-50/30 opacity-60"></div>
            
            <div className="bg-gradient-to-br from-teal-50/80 via-white/90 to-teal-100/60 p-8 text-center relative z-10">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-200">
                <img src={DekubitusSymbol} alt="Dekubitus Symbol" className="w-14 h-14 object-contain drop-shadow-lg" />
              </div>
              <h3 className="text-2xl font-black text-gray-800 mb-3 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Dekubitus</h3>
              <p className="text-gray-600 leading-relaxed">Verstehen Sie Druckgeschwüre: Ursachen, Stadien, Prävention und Behandlung.</p>
            </div>
            <div className="p-6 bg-gradient-to-r from-teal-50/80 to-teal-100/40 backdrop-blur-sm relative z-10">
              <div className="flex items-center justify-center">
                <span className="text-sm text-teal-700 font-semibold tracking-wide">Zum Lernbereich</span>
              </div>
            </div>
          </div>
        </Link>

        {/* IAD Card */}
        <Link to="/iad" className="group">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-102 border border-teal-200/50 overflow-hidden relative">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 via-transparent to-blue-50/30 opacity-60"></div>
            
            <div className="bg-gradient-to-br from-teal-50/80 via-white/90 to-teal-100/60 p-8 text-center relative z-10">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-200">
                <svg className="w-12 h-12 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-gray-800 mb-3 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">IAD</h3>
              <p className="text-gray-600 leading-relaxed">Erfahren Sie alles über Inkontinenz-assoziierte Dermatitis: Erkennung und Management.</p>
            </div>
            <div className="p-6 bg-gradient-to-r from-teal-50/80 to-teal-100/40 backdrop-blur-sm relative z-10">
              <div className="flex items-center justify-center">
                <span className="text-sm text-teal-700 font-semibold tracking-wide">Zum Lernbereich</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>

    {/* Quiz Section */}
    <section className="w-full max-w-4xl mx-auto px-4 mb-12">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 border border-teal-200/50 shadow-xl relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50/40 via-transparent to-blue-50/30 rounded-3xl"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-teal-400/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400/10 rounded-full blur-xl"></div>
        
        <div className="relative z-10 text-center">
          <h3 className="text-3xl font-black text-gray-800 mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Testen Sie Ihr Wissen!</h3>
          <p className="text-gray-700 text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
            Überprüfen und festigen Sie Ihr erworbenes Wissen mit unseren interaktiven Quizfragen zu Dekubitus und IAD.
          </p>
          <Link 
            to="/quiz" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold rounded-2xl hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-teal-500/25 transform hover:scale-105"
          >
            Jetzt zum Quiz 
            <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>

    <section className="w-full max-w-3xl mx-auto px-4 text-center">
      <div className="bg-gray-50/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg relative">
        <div className="relative z-10">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Haben Sie Fragen oder Anregungen?</h3>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            Ihr Feedback ist uns wichtig! Kontaktieren Sie uns gerne.
          </p>
          <Link 
            to="/kontakt" 
            className="inline-flex items-center px-6 py-2 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Kontakt aufnehmen
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default HomePage;