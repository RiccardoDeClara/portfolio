
interface SkillsProps {
  dict: {
    section_title: string;
    title: string;
    subtitle: string;
    dev_stack_title: string;
    tools_title: string;
  };
}

export default function Skills({ dict }: SkillsProps) {
  return (
    <section className={'skills'}>
      <div className="section-header">
        <span>{dict.section_title}</span>
      </div>

      <div className={'content'}>
        <h2 className={'title'}>{dict.title}</h2>
        <p className={'subtitle'}>{dict.subtitle}</p>

        <div className={'section'}>
          <h3 className={'sectionTitle'}>{dict.dev_stack_title}</h3>
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
          <h3 className={'sectionTitle'}>{dict.tools_title}</h3>
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
