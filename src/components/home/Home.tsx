import { ScrollButton } from '@/lib/ScrollButton';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

export const Home = () => {

  useGSAP(() => {
    const paragraphs1 = gsap.utils.toArray<HTMLParagraphElement>('.text1 p');
    const paragraphs2 = gsap.utils.toArray<HTMLParagraphElement>('.text2 p');
    const paragraphs3 = gsap.utils.toArray<HTMLParagraphElement>('.text3 p');
    paragraphs1.forEach((paragraph: HTMLElement, index: number) => {
      gsap.fromTo(paragraph, {
        opacity: 0,
        y: index % 2 === 0 ? -200 : 200,
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: index * 0.2,
        ease: 'power2.out',
      });
    }
    );

    paragraphs2.forEach((paragraph: HTMLElement, index: number) => {
      gsap.fromTo(paragraph, {
        opacity: 0,
        x: index % 2 === 0 ? -200 : 200,
      }, {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: index * 0.2,
        ease: 'power2.out',
      });
    }
    );

    const totalDelay = Math.max(paragraphs1.length, paragraphs2.length) * 0.16;

    paragraphs3.forEach((paragraph: HTMLElement, index: number) => {
      gsap.fromTo(paragraph, {
        opacity: 0,
        y: -200,
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: totalDelay + index * 0.2,
        ease: 'power2.out',
      });
    }
    );
    return () => {
      gsap.killTweensOf(paragraphs1);
      gsap.killTweensOf(paragraphs2);
      gsap.killTweensOf(paragraphs3);
    };
  }, []);

  return (
    <div className="relative trigger flex flex-col h-screen w-full items-center justify-center">
      <div className='flex gap-4 justify-center items-center text1 text-white'>
        <p className='text-8xl'>F</p>
        <p className='text-8xl'>U</p>
        <p className='text-8xl'>L</p>
        <p className='text-8xl'>L</p>
        <p className='text-8xl'>S</p>
        <p className='text-8xl'>T</p>
        <p className='text-8xl'>A</p>
        <p className='text-8xl'>C</p>
        <p className='text-8xl'>K</p>
      </div>
      <div className='ml-40 flex gap-4 justify-center items-center text2 text-white'>
        <p className='text-8xl'>D</p>
        <p className='text-8xl'>E</p>
        <p className='text-8xl'>V</p>
        <p className='text-8xl'>E</p>
        <p className='text-8xl'>L</p>
        <p className='text-8xl'>O</p>
        <p className='text-8xl'>P</p>
        <p className='text-8xl'>E</p>
        <p className='text-8xl'>R</p>
      </div>
      <div className='text3 flex flex-col justify-center ml-[40rem] text-left text-zinc-300'>
        <p className='text-6xl'>With great ideas</p>
        <p className='text-6xl'>come great solutions.</p>
      </div>
      <ScrollButton link="about" />
    </div>
  )
}
