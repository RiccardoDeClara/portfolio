
/* import sections */
import HeroBanner from "../components/sections/HeroBanner";
import AboutMe from "../components/sections/AboutMe";
import Experience from "../components/sections/Experience";
import Skills from "../components/sections/Skills";
import GetInTouch from "../components/sections/GetInTouch";
import wave from "../../public/wave.svg";
export default function Home() {
  return (
    <div className="container">
      <header className="main-header">
        <div className="logo"><h3>Riccardo De Clara</h3></div>
        <nav>
          <ul className="nav-links col-2">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact" className="btn-primary small">Contact</a></li>
            <li className="d-flex">
              <i className="bi bi-translate px-1 d-flex align-items-center">
              </i>
              <select id="select-lang" className="form-select form-select-sm">
                <option value="en">EN</option>
                <option value="it">IT</option>
              </select>
            </li>
            {/* <li> */}
            {/* <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" />
            </div> */}
            {/* </li> */}
          </ul>
        </nav>
      </header>

      <main>
        <HeroBanner />
        <div id="about"><AboutMe /></div>
        <div id="experience"><Experience /></div>
        <div id="skills"><Skills /></div>
        <div id="contact"><GetInTouch /></div>
      </main>
    </div >
  );
}
