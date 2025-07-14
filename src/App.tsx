import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import React, { useEffect } from "react";
import { About } from "./components/about/About";
import { Home } from "./components/home/Home";
import { Navbar } from "./components/navbar/Navbar";
import { CustomCursor } from "./lib/Cursor";
import DisableRightClick from "./lib/DisableRightClick";
import { FloatingLights } from "./lib/FloatingLights";
import { WaterRippleBackground } from "./lib/WaterEffect";
import { Project } from "./components/project/Project";
import { Contact } from "./components/contact/Contact";

gsap.registerPlugin(useGSAP, Draggable, ScrollTrigger, ScrollSmoother, ScrollToPlugin, SplitText, MotionPathPlugin);

export default function App() {

  const [waterEffect, setWaterEffect] = React.useState(true);

  useEffect(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2,
    });
    ScrollToPlugin.config({ autoKill: true });
  }, [])

  return (
    <div className="">
      <div id="smooth-wrapper" className="grid grid-cols-[50px_100vw_50px]">
        <div id="smooth-content" className="col-start-2 col-end-3">
          <Home />
          <About setWaterEffect={setWaterEffect} />
          <Project />
          <Contact />
        </div>
      </div>
      <FloatingLights />
      <WaterRippleBackground waterEffect={waterEffect} />
      <DisableRightClick />
      <CustomCursor />
      <Navbar />
    </div>
  );
}
