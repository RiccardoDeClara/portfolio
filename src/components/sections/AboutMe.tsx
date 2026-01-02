const cv = '/RiccardoDeClara.pdf';

interface AboutMeProps {
  dict: {
    section_title: string;
    title: string;
    subtitle: string;
    text1: string;
    text2: string;
    text3: string;
    experience_title: string;
    experience_text: string;
    education_title: string;
    education_text: string;
    connect_title: string;
    download_resume: string;
    linkedin_profile: string;
    email_label: string;
  };
}

export default function AboutMe({ dict }: AboutMeProps) {

  const linkedin = 'https://www.linkedin.com/in/riccardo-de-clara/';
  const email = 'ricccardo.declara@gmail.com';

  return (
    <section className={'about'}>
      <div className="section-header">
        <span>{dict.section_title}</span>
      </div>

      <div className={'grid'}>
        <div className={'bioCard'}>
          <h2 className={'title'}>{dict.title}</h2>
          <p className={'subtitle'}>{dict.subtitle}</p>
          <p className={'text'}>
            {dict.text1}
          </p>
          <p className={'text'}>
            {dict.text2}
          </p>
        </div>

        <div className={'detailsCard'}>
          <p className={'text'}>
            {dict.text3}
          </p>
          <div className={'detailItem'}>
            <h3 className={'detailTitle'}>{dict.experience_title}</h3>
            <p>{dict.experience_text}</p>
          </div>

          <div className={'detailItem'}>
            <h3 className={'detailTitle'}>{dict.education_title}</h3>
            <p>{dict.education_text}</p>
          </div>

          <div className={'detailItem'}>
            <h3 className={'detailTitle'}>{dict.connect_title}</h3>
            <div className={'links'}>
              <a href={cv} download>{dict.download_resume}
                <i className="bi bi-cloud-arrow-down" style={{ fontSize: '25px' }}></i></a>
              <a href={linkedin}>{dict.linkedin_profile}<i className="bi bi-box-arrow-up-right" style={{ fontSize: '25px' }}></i>

              </a>
              <a href={`mailto:${email}`}>{dict.email_label}
                <i className="bi bi-envelope" style={{ fontSize: '25px' }}></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
