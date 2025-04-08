import { Socials } from './Socials';
import { HeroImage } from './HeroImage';

export const Hero = () => {
  return <div className="hero-container">
    <div className='about-me'>
      <h3>I'm Evelinn</h3>
      <h1>React / Web Developer</h1>
      <p>Evelinn is a front-end developer with a passion for clean, functional, and visually engaging web experiences. Currently immersed in a coding bootcamp, She honing her skills in HTML, CSS, JavaScript, and modern frameworks to craft intuitive and aesthetically pleasing websites. With a keen eye for design and a love for problem-solving, she's excited to build interactive, user-friendly interfaces that make an impact. Check out her projects below—she's always learning, iterating, and creating!</p>
      <Socials />
    </div>
    <div>
      <HeroImage />
    </div>
  </div>
}