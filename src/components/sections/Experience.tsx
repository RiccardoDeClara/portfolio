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

interface ExperienceProps {
  dict: {
    section_title: string;
    tecnoteca_time: string;
    tecnoteca_role: string;
    tecnoteca_desc: string;
    extark_time: string;
    extark_role: string;
    extark_desc: string;
  };
}

export default function Experience({ dict }: ExperienceProps) {
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
        <span>{dict.section_title}</span>
      </div>
      <Timeline position={'alternate'}
        sx={{}}
      >
        <TimelineItem className='w-lg-50'>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="h6"
          >
            <span className='tecnoteca-time'>{dict.tecnoteca_time}</span>
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
                <h3 className={'role'}>{dict.tecnoteca_role}</h3>
                <p className={'text'}>
                  {dict.tecnoteca_desc}
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
            <span className='extark-time'>{dict.extark_time}</span>
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
                <h3 className={'role'}>{dict.extark_role}</h3>
                <p className={'text'}>
                  {dict.extark_desc}
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
