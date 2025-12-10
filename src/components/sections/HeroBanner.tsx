import Image from 'next/image';
import rdc_image from '../../../public/me.jpeg';

export default function HeroBanner() {
  return (
    <section className={'hero'}>
      <div style={{ padding: '2rem' }}>
        <p className={'greeting'}>Hello, I&apos;m</p>
        <h1 className={'name'}>
          Riccardo<br />
          <span>De Clara</span>
        </h1>
        <p className={'role'}>Front-End Developer</p>
        <p className={'description'}>
          Every project is a challenge, every person is a teacher and every mistake is a lesson:
          my ambition is to progress every day, with umilty, curiosity, and dedication, toward
          the best version of myself and the world i want to build.
        </p>

        <div className={'actions'}>
          <a href="#contact" className="btn-primary">Get In Touch</a>
          <a href="#about" style={{ padding: '1rem 2rem', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50px', fontWeight: 600 }}>
            About Me
          </a>
        </div>
      </div>

      <div className={'imageWrapper'}>
        <div className={'imageContainer'}>
          <Image
            src={rdc_image}
            alt="Riccardo De Clara"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 500px"
          />
        </div>
      </div>
    </section>
  );
}
