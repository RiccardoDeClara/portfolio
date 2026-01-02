/* import sections */
import Header from "../../components/sections/Header";
import HeroBanner from "../../components/sections/HeroBanner";
import AboutMe from "../../components/sections/AboutMe";
import Experience from "../../components/sections/Experience";
import Skills from "../../components/sections/Skills";
import GetInTouch from "../../components/sections/GetInTouch";
// import BlobCursor from "../../hooks/BlobCursor";

import { getDictionary } from "../../get-dictionary";

export default async function Home({ params }: { params: Promise<{ lang: 'en' | 'it' }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="container">
      <Header dict={dict.header} lang={lang} />
      <main>
        {/* <BlobCursor /> */}
        <div id="hero"><HeroBanner dict={dict.hero} /></div>
        <div id="about"><AboutMe dict={dict.about} /></div>
        <div id="experience"><Experience dict={dict.experience} /></div>
        <div id="skills"><Skills dict={dict.skills} /></div>
        <div id="contact"><GetInTouch dict={dict.contact} /></div>
      </main>
    </div>
  );
}
