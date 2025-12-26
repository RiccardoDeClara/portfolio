/* import sections */
import Header from "../components/sections/Header";
import HeroBanner from "../components/sections/HeroBanner";
import AboutMe from "../components/sections/AboutMe";
import Experience from "../components/sections/Experience";
import Skills from "../components/sections/Skills";
import GetInTouch from "../components/sections/GetInTouch";
// import BlobCursor from "../hooks/BlobCursor";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <main>
        {/* <BlobCursor /> */}
        <div id="hero"><HeroBanner /></div>
        <div id="about"><AboutMe /></div>
        <div id="experience"><Experience /></div>
        <div id="skills"><Skills /></div>
        <div id="contact"><GetInTouch /></div>
      </main>
    </div>
  );
}
