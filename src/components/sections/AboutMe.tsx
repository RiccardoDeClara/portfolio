const cv = '/RiccardoDeClara.pdf';

export default function AboutMe() {

  const linkedin = 'https://www.linkedin.com/in/riccardo-de-clara/';
  const email = 'ricccardo.declara@gmail.com';

  return (
    <section className={'about'}>
      <div className="section-header">
        <span>ABOUT ME</span>
      </div>

      <div className={'grid'}>
        <div className={'bioCard'}>
          <h2 className={'title'}>Who I Am</h2>
          <p className={'subtitle'}>Passionate Front-End Developer based in Italy</p>
          <p className={'text'}>
            I obtained my diploma at the “Istituto Tecnico Antonio Zanon of udine,
            Italy, with a final grade of 86/100, specializing in Business Information
            Systems. During my studies i developed skills in programming languages
            such as C++, PHP, HTML, CSS, JavaScript and SQL.
          </p>
          <p className={'text'}>
            I had the oportunity to partecipate to the european project PON -
            “logica-mente”, focused on developing computational thinking, digital
            creativity, and problem-solving skills through the creation of mobile
            applications. Additionaly, i took part and win the contentest “Pitch 120
            secondi”, promoted by Friuli Innovazione and Comune di Udine, thanks to
            an original and sustainable entrepreneurial idea. The project was
            presented in a team of two, and it was recognized for the quality of the
            pitch and the strength of the business model.
          </p>
        </div>

        <div className={'detailsCard'}>
          <p className={'text'}>
            Alongside my school and professional journey, I have also pursued self-
            directed study, which has allowed me to acquire foundational knowledge
            in Docker and Kubernetes, bringing me closer to the DevOps field, an
            area of growing interest to me
          </p>
          <div className={'detailItem'}>
            <h3 className={'detailTitle'}>Experience</h3>
            <p>More than 3 Years in Web Development and as Front-end developer.</p>
          </div>

          <div className={'detailItem'}>
            <h3 className={'detailTitle'}>Education</h3>
            <p> Business Information Systems.</p>
          </div>

          <div className={'detailItem'}>
            <h3 className={'detailTitle'}>Connect</h3>
            <div className={'links'}>
              <a href={cv} download>Download Resume
                {/* <img src={downloa_icon} width="20px" /></a> */}
                <i className="bi bi-cloud-arrow-down" style={{ fontSize: '25px' }}></i></a>
              <a href={linkedin}>LinkedIn Profile
                {/* <img src={link_download}/> */}<i className="bi bi-box-arrow-up-right" style={{ fontSize: '25px' }}></i>

              </a>
              <a href={`mailto:${email}`}>email
                {/* <img src={link_download} width="20px" /> */}
                <i className="bi bi-envelope" style={{ fontSize: '25px' }}></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
