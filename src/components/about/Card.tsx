import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { AboutText } from "./AboutText";
import { Mask } from "./Mask";

const Card = ({ setWaterEffect }: { setWaterEffect: React.Dispatch<React.SetStateAction<boolean>> }) => {

  const aboutRef = React.useRef<HTMLDivElement>(null);
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const aboutText = React.useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    if (!aboutRef.current && !titleRef.current) return;

    const tl = gsap.timeline({ delay: 2 });

    tl.fromTo(aboutRef.current, {
      opacity: 0,
      y: -150,
    }, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 800px",
      },
    });

    tl.fromTo(titleRef.current, {
      opacity: 0,
      y: -50,
    }, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power2.out",
    }, "<+0.8");

    tl.fromTo(titleRef.current, {
      opacity: 0,
      y: -50,
    }, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power2.out",
    }, "<+0.8");

    tl.fromTo(aboutText.current, {
      opacity: 0,
      y: -50,
    }, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power2.out",
    }, "<+0.8");
  }, [])

  return (
    <div ref={aboutRef} className="bg-zinc-800 mt-10 rounded-lg shadow-lg w-[80%] h-[80%] flex flex-col items-center justify-center" onMouseEnter={() => setWaterEffect(false)} onMouseLeave={() => setWaterEffect(true)}>
      <h1 ref={titleRef} className="text-7xl font-font mt-10">About Me</h1>
      <AboutText text={aboutText} />
      <Mask aboutRef={aboutRef} />
    </div>
  );
}

export default Card;
