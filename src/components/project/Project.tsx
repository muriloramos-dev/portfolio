import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect } from 'react'
import { ProjectInfo } from './ProjectInfo';
import { ScrollTopButton } from '@/lib/ScrollTopButton';
import { ScrollButton } from '@/lib/ScrollButton';

export const Project = () => {

  const projectDivRef = React.useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const projects = gsap.utils.toArray('.project-info');

    gsap.from(projects, {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: projectDivRef.current,
        start: 'top center',
      }
    });
  }, [])

  return (
    <div id='project' ref={projectDivRef} className='relative 
    grid grid-cols-2 grid-rows-[1fr_1fr] gap-4 justify-center w-full max-w-6xl mx-auto h-screen'>
      <ProjectInfo props='self-end' completed={true} description="TaskHive is a collaborative task management platform focused on team organization and productivity. It enables users to create, assign, and track tasks in real time, offering a simple, intuitive, and efficient experience. Ideal for squads, freelancers, or small teams, the application emphasizes agility and clarity in workflow management." technologies={["Java", "Spring Boot", "JWT", "Spring Security"]} title='TaskHive'/>
      <ProjectInfo props='self-end' completed={true} description="QuickMart is a comprehensive and modern e-commerce platform designed to streamline the shopping journey with speed and simplicity. Supporting multiple user roles (customer, seller, and administrator), the platform offers public product browsing, seller sales management, and a robust administrative area." technologies={["Java", "Spring Boot", "JWT", "Spring Security"]} title='QuickMart'/>
      <ProjectInfo props='self-start' completed={false} description="Technova is an evolution of QuickMart, built as a tech-focused marketplace that leverages Kubernetes, CI/CD pipelines, and a modern microservices architecture. The project separates responsibilities into independent services (user, product, vendor, gateway) and uses messaging for inter-service communication. It is designed for easy scalability and streamlined deployment." technologies={["Java", "Spring Boot", "React", "Flutter", "Quarkus", "Cloud", "Docker", "Kubernetes", "MongoDB", "PostgreSQL", "Microsservices", "RabbitMQ", "CI/CD"]} title='Technova'/>
      <ProjectInfo props='self-start' completed={false} description="Commander is a project management application built with a microservices mindset. It helps developers manage and run containers for each microservice project using Electron.js. The app facilitates creating new microservice projects, as well as organizing multiple projects by generating new folders and scaffolding new applications, streamlining the workflow for multi-project microservice development." technologies={["Java", "Spring Boot", "Keycloak", "Docker", "Kubernetes", "PostgreSQL", "Electron"]} title='Commander'/>
      <ScrollButton link='contact' />
    </div>
  )
}
