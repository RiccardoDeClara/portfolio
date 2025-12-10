
export default function Skills() {
  return (
    <section className={'skills'}>
      <div className="section-header">
        <span>SKILLS</span>
      </div>

      <div className={'content'}>
        <h2 className={'title'}>Technical Proficiency</h2>
        <p className={'subtitle'}>A constantly evolving stack to build modern web applications.</p>

        <div className={'section'}>
          <h3 className={'sectionTitle'}>Development Stack</h3>
          <div className={'skillList'}>
            <span className={'skillItem'}>React</span>
            <span className={'skillItem'}>TypeScript</span>
            <span className={'skillItem'}>JavaScript (ES6+)</span>
            <span className={'skillItem'}>HTML5 & CSS3</span>
            <span className={'skillItem'}>SASS/SCSS</span>
            <span className={'skillItem'}>Bootstrap</span>
            <span className={'skillItem'}>Python</span>
            <span className={'skillItem'}>Node.js</span>
            <span className={'skillItem'}>Next.js</span>
          </div>
        </div>

        <div className={'section'}>
          <h3 className={'sectionTitle'}>Tools & Workflow</h3>
          <div className={'skillList'}>
            <span className={'skillItem'}>Docker</span>
            <span className={'skillItem'}>Kubernetes</span>
            <span className={'skillItem'}>Git</span>
            <span className={'skillItem'}>GitHub</span>
            <span className={'skillItem'}>GitLab</span>
            <span className={'skillItem'}>Figma</span>
            <span className={'skillItem'}>Problem Solving</span>
          </div>
        </div>
      </div>
    </section>
  );
}
