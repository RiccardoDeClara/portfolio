"use client";
import Image from 'next/image';
import { Tooltip } from 'react-tooltip';

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
        <p className={'subtitle text-center'}>{dict.subtitle}</p>

        <div className={'section'}>
          <h3 className={'sectionTitle'}>{dict.dev_stack_title}</h3>
          <div className={'skillList'}>
            <span className={'skillItem'}>
              <Image
                src="/skills/react.svg"
                alt="Skill Icon"
                width={50}
                height={50}
                priority
                data-tooltip-id="react"
                data-tooltip-content="React"
              />
              <Tooltip id="react" />
            </span>
            <span className={'skillItem'}>
              <Image
                src="/skills/typescript.svg"
                alt="Skill Icon"
                width={50}
                height={50}
                priority
                data-tooltip-id="typescript"
                data-tooltip-content="TypeScript"
              />
              <Tooltip id="typescript" />
            </span>
            <span className={'skillItem'}>
              <Image
                src="/skills/javascript.svg"
                alt="Skill Icon"
                width={50}
                height={50}
                priority
                data-tooltip-id="javascript"
                data-tooltip-content="JavaScript (ES6+)"
              />
              <Tooltip id="javascript" />
            </span>
            <span className={'skillItem'}>
              <Image
                src="/skills/html5.svg"
                alt="Skill Icon"
                width={50}
                height={50}
                priority
                data-tooltip-id="html5"
                data-tooltip-content="HTML5"
              />
              <Tooltip id="html5" />
            </span>
            <span className={'skillItem'}>
              <Image
                src="/skills/sass.svg"
                alt="Skill Icon"
                width={50}
                height={50}
                priority
                data-tooltip-id="sass"
                data-tooltip-content="Sass/Scss"
              />
              <Tooltip id="sass" />
            </span>
            <span className={'skillItem'}>
              <Image
                src="/skills/bootstrap.svg"
                alt="Skill Icon"
                width={50}
                height={50}
                priority
                data-tooltip-id="bootstrap"
                data-tooltip-content="Bootstrap"
              />
              <Tooltip id="bootstrap" />
            </span>
            <span className={'skillItem'}>
              <Image
                src="/skills/python.svg"
                alt="Skill Icon"
                width={50}
                height={50}
                priority
                data-tooltip-id="python"
                data-tooltip-content="Python"
              />
              <Tooltip id="python" />
            </span>
            <span className={'skillItem'}>
              <Image
                src="/skills/nodejs.svg"
                alt="Skill Icon"
                width={50}
                height={50}
                priority
                data-tooltip-id="nodejs"
                data-tooltip-content="Node.js"
              />
              <Tooltip id="nodejs" />
            </span>
          </div>
        </div>

        <div className={'section'}>
          <h3 className={'sectionTitle'}>{dict.tools_title}</h3>
          <div className={'skillList'}>
            <span className={'skillItem'}>
              <Image
                src="/skills/docker.svg"
                alt="Skill Icon"
                width={50}
                height={50}
                priority
                data-tooltip-id="docker"
                data-tooltip-content="Docker"
              />
              <Tooltip id="docker" />
            </span>
            <span className={'skillItem'}>
              <Image
                src="/skills/kubernetes.svg"
                alt="Skill Icon"
                width={50}
                height={50}
                priority
                data-tooltip-id="kubernetes"
                data-tooltip-content="Kubernetes"
              />
              <Tooltip id="kubernetes" />
            </span>
            <span className={'skillItem'}>
              <Image
                src="/skills/git.svg"
                alt="Skill Icon"
                width={50}
                height={50}
                priority
                data-tooltip-id="git"
                data-tooltip-content="Git"
              />
              <Tooltip id="git" />
            </span>
            <span className={'skillItem'}>
              <Image
                src="/skills/github.svg"
                alt="Skill Icon"
                width={50}
                height={50}
                priority
                data-tooltip-id="github"
                data-tooltip-content="GitHub"
              />
              <Tooltip id="github" />
            </span>
            <span className={'skillItem'}>
              <Image
                src="/skills/gitlab.svg"
                alt="Skill Icon"
                width={50}
                height={50}
                priority
                data-tooltip-id="gitlab"
                data-tooltip-content="GitLab"
              />
              <Tooltip id="gitlab" />
            </span>
            <span className={'skillItem'}>
              <Image
                src="/skills/figma.svg"
                alt="Skill Icon"
                width={50}
                height={50}
                priority
                data-tooltip-id="figma"
                data-tooltip-content="Figma"
              />
              <Tooltip id="figma" />
            </span>
            <span className={'skillItem'}>
              <Image
                src="/skills/cucumber.svg"
                alt="Skill Icon"
                width={50}
                height={50}
                priority
                data-tooltip-id="cucumber"
                data-tooltip-content="Cucumber"
              />
              <Tooltip id="cucumber" />
            </span>
            <span className={'skillItem'}>
              <Image
                src="/skills/selenium.webp"
                alt="Skill Icon"
                width={50}
                height={50}
                priority
                data-tooltip-id="selenium"
                data-tooltip-content="Selenium"
              />
              <Tooltip id="selenium" />
            </span>
            {/* <span className={'skillItem'}>Problem Solving</span> */}
          </div>
        </div>
      </div>
    </section>
  );
}
