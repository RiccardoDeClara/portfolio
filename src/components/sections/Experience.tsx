"use client";
import React, { useLayoutEffect, useRef } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import CodeIcon from '@mui/icons-material/Code';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import Typography from '@mui/material/Typography';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const covers = gsap.utils.toArray('.white-cover');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 4,
        }
      });

      tl.to(covers, {
        scaleY: 0,
        transformOrigin: "bottom center",
        ease: "none",
        stagger: 0.5
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const whiteCoverStyle = {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    zIndex: 1
  };

  return (
    <section ref={containerRef}>
      <div className="section-header">
        <span>EXPERIENCE</span>
      </div>
      <Timeline position={'alternate'}
        sx={{}}
      >
        <TimelineItem className='w-lg-50'>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="h6"
          >
            <span className='tecnoteca-time'>2022 - Present</span>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'primary.main', position: 'relative' }}>
              <span className="white-cover" style={whiteCoverStyle} />
            </TimelineConnector>
            <TimelineDot color="primary" variant="outlined">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector sx={{ background: 'linear-gradient(90deg,rgba(25, 118, 210, 1) 0%, rgba(46, 125, 50, 1) 51%)', position: 'relative' }}>
              <span className="white-cover" style={whiteCoverStyle} />
            </TimelineConnector>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography component="div">
              <div className={'card-experience'}>
                <div className={'cardHeader'}>
                  <Typography variant="h5" component="h5" className='company'>
                    Tecnoteca Srl
                  </Typography>
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
              </div></Typography>
          </TimelineContent>
        </TimelineItem>
        {/* Card 1 */}
        <TimelineItem className='my-2 w-lg-50' color='primary'>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="h6"
          >
            <span className='extark-time'>Summer 2022</span>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'success.main', position: 'relative' }}>
              <span className="white-cover" style={whiteCoverStyle} />
            </TimelineConnector>
            <TimelineDot color="success" variant="outlined">
              <CodeIcon />
            </TimelineDot>
            <TimelineConnector sx={{
              background: 'linear-gradient(90deg,rgba(46, 125, 50, 1) 51%, rgba(255, 195, 0, 1) 100%)',
              position: 'relative'
            }}>
              <span className="white-cover" style={whiteCoverStyle} />
            </TimelineConnector>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography component="div">
              <div className={'card-experience'}>
                <div className={'cardHeader justify-content-end'}>
                  <Typography variant="h5" component="h5" className='company'>
                    Extark Srl
                  </Typography>
                </div>
                <h3 className={'role'}>Front-End Developer</h3>
                <p className={'text'}>
                  My first work e xperience was as frontend consultant.
                  During this initial role i worked as Frontend developer inside a startup
                  environment, focused on React and JavaScript usage. <br />
                  This opportunity anables me to face the World’s job and upgrade my knowledge
                  developing modern and responsive user interfaces.
                </p>
                <div className={'tags justify-content-end'}>
                  <span className={'tag'}>HTML5</span>
                  <span className={'tag'}>CSS3</span>
                  <span className={'tag'}>JavaScript</span>
                  <span className={'tag'}>React</span>
                  <span className={'tag'}>Git</span>
                </div>
              </div></Typography>
          </TimelineContent>
        </TimelineItem>
        {/* Card 2*/}
      </Timeline>
    </section >
  );
}
