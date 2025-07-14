import React from 'react'

export const AboutText = ({ text }: { text: React.RefObject<HTMLDivElement | null> }) => {

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <p
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        ref={text}
        className={"text-2xl text-zinc-300 p-6 w-[60%] tracking-widest" + (isHovered ? " text-transparent transition-colors duration-300" : "")}>
        I am someone who is passionate about technology, driven by curiosity and a constant desire to turn ideas into real solutions. Since my first experiences with programming, I’ve always sought to understand not just how tools work, but the “why” behind each technical decision. My main goal is to become a complete full stack developer, mastering both front-end and back-end, with strong skills in technologies like <span className="text-red-500">Java</span>, <span className="text-red-500">React</span>, <span className="text-red-500">Spring Boot</span>, <span className="text-red-500">TypeScript</span>, <span className="text-red-500">Flutter</span>, and more. I have hands-on experience building modular applications, integrating APIs, creating rich animations using <span className="text-red-500">GSAP</span>, and managing state with <span className="text-red-500">React</span>. I’ve also explored microservices architecture with <span className="text-red-500">Docker</span> and <span className="text-red-500">Kubernetes</span>, version control with <span className="text-red-500">Git</span>, structured CI/CD pipelines using <span className="text-red-500">Jenkins</span>, and best practices through <span className="text-red-500">Helm Charts</span> in production environments. I’m well-versed in setting up and using both <span className="text-red-500">SQL</span> and <span className="text-red-500">NoSQL</span> databases, such as <span className="text-red-500">PostgreSQL</span> and <span className="text-red-500">MongoDB</span>, always with an eye toward performance and scalability.
      </p>
    </div>
  )
}
