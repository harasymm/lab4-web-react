import Header from "./Components/Header";
import Summary from "./Components/Summary";
import PersonalInfo from "./Components/PersonalInfo";
import SocialMedia from "./Components/SocialMedia";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

function App() {
   return (
   <div className="relative min-h-screen flex flex-col items-center overflow-hidden">

  <img
    src="src/images/16833522_10154869194603787_1517635754_o-1-1024x971.png"
    alt="LPNU"
    className="
      absolute
      left-[-60px]
      top-1/2
      -translate-y-1/2
      rotate-[-25deg]
      opacity-10
      w-[420px]
      pointer-events-none
      select-none
    "
  />

  <img
    src="src/images/arton141.png"
    alt="LPNU"
    className="
      absolute
      right-[-60px]
      top-1/2
      -translate-y-1/2
      rotate-[25deg]
      opacity-10
      w-[420px]
      pointer-events-none
      select-none
    "
  />

  <div className="relative z-10 px-5 py-10">
    <div className="max-w-3xl mx-auto bg-white p-3 rounded-t-2xl shadow-lg">
      <Header />
      <Summary />
      <PersonalInfo />
      <Education />
      <Skills />
      <Projects />
      <SocialMedia /> 
    </div>
    <Footer />
  </div>
</div>
  );
}

export default App;