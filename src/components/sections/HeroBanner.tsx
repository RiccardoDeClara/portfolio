import Image from 'next/image';
import rdc_image from '../../../public/me.jpeg';

interface HeroBannerProps {
  dict: {
    greeting: string;
    role: string;
    description: string;
    cta_contact: string;
    cta_about: string;
  };
}

export default function HeroBanner({ dict }: HeroBannerProps) {
  return (
    <section className={'hero'}>
      <div style={{ padding: '2rem' }}>
        <p className={'greeting'}>{dict.greeting}</p>
        <h1 className={'name'}>
          Riccardo<br />
          <span>De Clara</span>
        </h1>
        <p className={'role'}>{dict.role}</p>
        <p className={'description'}>
          {dict.description}
        </p>

        <div className={'actions'}>
          <a href={`mailto:${process.env.GMAIL_USER}?subject=Riccardo%20De%20Clara%20-%20Portfolio`} target="_blank" className="btn-primary">{dict.cta_contact}</a>
          <a href="#about" className="btn-secondary">
            {dict.cta_about}
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
