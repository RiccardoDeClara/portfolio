"use client";
import React, { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const icons = [
  { src: '/skills/bootstrap.svg', side: 'left-0' },
  { src: '/skills/nextjs.svg', side: 'left-1' },
  { src: '/skills/figma.svg', side: 'left-2' },
  { src: '/skills/react.svg', side: 'right-0' },
  { src: '/skills/github.svg', side: 'right-1' },
  { src: '/skills/docker.svg', side: 'right-2' },
];

export default function FloatingIcons() {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      iconsRef.current.forEach((icon, index) => {
        if (!icon) return;

        const side = icons[index].side;
        const isLeft = side.startsWith('left');
        const moveX = isLeft ? -300 : 300;
        const rotation = isLeft ? -45 : 45;

        // Intro animation or just set initial state
        gsap.set(icon, {
          rotation: isLeft ? -15 : 15,
          scale: 0.8,
          opacity: 0,
        });

        gsap.to(icon, {
          opacity: 0.1,
          scale: 1,
          duration: 1.5,
          delay: index * 0.1,
          ease: "back.out(1.7)"
        });

        // Floating animation
        gsap.to(icon, {
          y: "+=20",
          rotation: "+=5",
          duration: 3 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });

        // Scroll animation with a delay (dead zone) before starting
        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "1500px top",
            scrub: 2,
          }
        });

        scrollTl
          .to(icon, { duration: 0.1 }) // Stay still/visible for the first ~30% of the scroll range
          .to(icon, {
            x: moveX,
            opacity: 0,
            scale: 0.3,
            rotation: rotation,
            filter: "blur(20px)",
            ease: "power2.inOut"
          });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="floating-icons-container" ref={containerRef}>
      {icons.map((icon, index) => (
        <div
          key={index}
          ref={(el) => { iconsRef.current[index] = el; }}
          className={`floating-icon ${icon.side} icon-${index}`}
        >
          <Image
            src={icon.src}
            alt="Skill Icon"
            width={200}
            height={200}
            priority
          />
        </div>
      ))}
    </div>
  );
}
