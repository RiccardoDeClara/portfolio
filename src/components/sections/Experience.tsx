
export default function Experience() {
  return (
    <section className={'experience'}>
      <div className="section-header">
        <span>EXPERIENCE</span>
      </div>
      <div className={'grid'}>
        {/* Card 1 */}
        <div className={'card-experience'}>
          <div className={'cardHeader'}>
            <h2 className={'company'}>Extark Srl</h2>
            <span className={'period'}>Summer 2022</span>
          </div>
          <h3 className={'role'}>Front-End Developer</h3>
          <p className={'text'}>
            My first work e xperience was as frontend consultant.
            During this initial role i worked as Frontend developer inside a startup
            environment, focused on React and JavaScript usage. <br />
            This opportunity anables me to face the World’s job and upgrade my knowledge
            developing modern and responsive user interfaces.
          </p>
          <div className={'tags'}>
            <span className={'tag'}>HTML5</span>
            <span className={'tag'}>CSS3</span>
            <span className={'tag'}>JavaScript</span>
            <span className={'tag'}>React</span>
            <span className={'tag'}>Git</span>
          </div>
        </div>
        {/* Card 2 */}
        <div className={'card-experience'}>
          <div className={'cardHeader'}>
            <h2 className={'company'}>Tecnoteca Srl</h2>
            <span className={'period'}>2022 - Present</span>
          </div>
          <h3 className={'role'}>Web Developer</h3>
          <p className={'text'}>
            In my current role, I have consolidated and expanded my skills in JavaScript and React by contributing to the development of complex projects, which also involved integrating CMS platforms such as Plone—requiring backend knowledge in Python and frontend development in React and JavaScript—as well as WordPress.<br />
            Over the years, I have participated in the development and maintenance of websites, focusing on both functional aspects and the graphical interface, with particular attention to accessibility and user experience.<br />
            During this experience, I have gained daily familiarity with version control tools such as Git, using platforms like GitHub and GitLab. I have also developed a basic knowledge of Python and SQL, while gaining experience in teamwork and effectively managing the dynamics typical of modern frontend projects.<br />
            Last but not least, I was also involved in the development of the UI for CMDBuild, the flagship CMDB product of Tecnoteca Srl, developed using JavaScript and the Sencha Ext JS framework.
          </p>
          <div className={'tags'}>
            <span className={'tag'}>React</span>
            <span className={'tag'}>TypeScript</span>
            <span className={'tag'}>Next.js</span>
            <span className={'tag'}>SCSS</span>
            <span className={'tag'}>Git</span>
            <span className={'tag'}>GitLab</span>
            <span className={'tag'}>Docker</span>
            <span className={'tag'}>Python</span>
            <span className={'tag'}>Plone</span>
            <span className={'tag'}>Sencha Ext JS</span>
          </div>
        </div>
      </div>
    </section >
  );
}
