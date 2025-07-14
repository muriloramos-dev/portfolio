import gsap from "gsap";

type SvgComponentProps = {
  title?: string;
  link?: string;
}

const SVGComponent = ({title, link} : SvgComponentProps) => (
  <button onClick={() => {
      gsap.to(window, {
        duration: 1.5,
        ease: "power2.inOut",
        scrollTo: { y: link },
        onComplete: () => {
          ScrollTrigger.refresh();
        },
      });
    }} className="relative group"> 
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 240 80"
      className="w-[200px] h-[80px] stroke-zinc-500 group-hover:stroke-white transition-colors duration-300 hover:drop-shadow-2xl hover:drop-shadow-zinc-400"
      fill="none"
    >
      <path d="M30 0 H200 L230 30 V80 L200 80 H30 L0 50 V0 Z" fill="transparent" />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        className="text-2xl fill-white font-font tracking-wider"
      >
        {title}
      </text>
    </svg>
  </button>
);
export default SVGComponent;
